import { Catch, ExceptionFilterMethods, Inject, PlatformContext } from "@tsed/common";
import { LogService } from "src/services/common/log.service";
import { ApiResponse } from "../../api-models/apiResponse";
import { SlackService } from "../../services/common/slack.service";
import { AcidViolationException } from "../app-exception/acidViolation.exception";

@Catch(AcidViolationException)
export class AcidViolationHandler implements ExceptionFilterMethods {


  @Inject()
  private logService: LogService;

  @Inject()
  private slackService: SlackService;

  async catch(exception: AcidViolationException, ctx: PlatformContext) {
    const { response } = ctx;
    const { session, error } = exception;
    const errMsg = (error && error.error) ? error.error : 'no specific error found in acid-exception-object'

    await session.abortTransaction();
    session.endSession();



    const finalErrorMsg = `Acid-Exception occured while performing transaction , [error = ${errMsg}]`;

    this.logService.error(ctx, finalErrorMsg);
    this.slackService.notifyBackendChannel(ctx, 'n/a', finalErrorMsg);


    const apiResp = new ApiResponse<any>(null, ctx, finalErrorMsg, 500);

    response.status(500); //setting header status
    response.body(apiResp);
  }

}
