import { Catch, ExceptionFilterMethods, Inject, MongooseErrorFilter, PlatformContext } from "@tsed/common";
import { Exception } from "@tsed/exceptions";
import { ErrorMessage } from "src/constants/appConstants";
import { LogService } from "src/services/common/log.service";
import { ApiResponse } from "../../api-models/apiResponse";
import { SlackService } from "../../services/common/slack.service";


/**
 * 
 * this class will catch all inbuild exceptions of Ts.Ed, 
 * instead of giving ts.ed internal error
 * we will provide response in our custom format
 * 
 */

@Catch(Error, Exception, MongooseErrorFilter)
export class UncheckedExceptionHandler implements ExceptionFilterMethods {


  @Inject()
  private logService: LogService;

  @Inject()
  private slackService: SlackService;



  catch(uncheckedException: Exception, ctx: PlatformContext) {
    const { response } = ctx;
    const errMsg = (uncheckedException && uncheckedException.message) ? uncheckedException.message : ErrorMessage.GENERIC_ERROR;

    //below 4 lines added to track resource not found error
    const { request } = ctx;
    const { headers = {} } = request;
    const { host = '', location = '', origin = '', etag = '', from = '', } = headers;

    const slackErrorMsg = `Unchecked exception : [error = ${errMsg}]`;
    const logErrorMsg = `${slackErrorMsg} ${host ? `[host = ${host}]` : ``} , ${from ? `[from = ${from}]` : ``} , ${location ? `[location = ${location}]` : ``}  ${origin ? `[origin = ${origin}]` : ``}`;

    this.logService.error(ctx, logErrorMsg);
    if (errMsg.toLowerCase().startsWith("bad request")) {
      this.slackService.notifyBackendChannel(ctx, 'n/a', slackErrorMsg);
    }

    const apiResp = new ApiResponse<any>(null, ctx, errMsg, 400);

    response.status(400); //setting header status
    response.body(apiResp);
  }

}
