import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import "@tsed/ajv";
import "@tsed/swagger";
import "@tsed/mongoose";
import { config, rootDir } from "./config";
import { UserCredentials } from "./models/user/userCredentials.model";
import { AppConfig } from "./config/app";



@Configuration({
  ...config,
  // ajv: {
  //   errorFormatter: (error) => `Value '${error.data}' of '${error.dataPath}' is incorrect`,
  //   verbose: false,
  //   // formats : 
  // },
  acceptMimes: ["application/json"],
  logger: {
    debug: false,
    logRequest: false,
    requestFields: []
  },
  httpPort: AppConfig.port,
  httpsPort: false, // CHANGE
  mount: {
    "/api/v1": [
      `${rootDir}/controllers/**/*.ts`
    ],
    "/": [
      `${rootDir}/controllers/health/**/*.ts` //this is for ELB health check
    ]
  },
  componentsScan: [
    `${rootDir}/services/**/*.ts`,
    `${rootDir}/dao/**/*.ts`,
    `${rootDir}/protocols/**/*.ts`,
    `${rootDir}/middlewares/**/*.ts`,
    `${rootDir}/common/app-exception-handlers/**/*.ts`
  ],


  //swagger is not shown in PROD
  swagger: AppConfig.getSwaggerList,

  passport: {
    userInfoModel: UserCredentials,
  },
  exclude: [
    "**/*.spec.ts"
  ]
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit(): void {
    this.app
      .use(cors({
        origin: "*"
      }))
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));
  }
}


/**
 *
 *
 * search-tag
 *
 * to-do : refactoring/ brain-storming required
 * CHANGED-REQUIRED : @Required feilds were commented , plz change that
 * new-api : implement apis
 * epoch-ts : date related feilds which got changed to epoch-timestamp
 * PLANS : plan structureal changes
 *
 *
 */


/**
 * ==============
 * scoring to-do
 * ==============
 *   -middleware for furling and unfurling && order feilds ===> NOT REQUIRED NOW
 *   -changing encoding to op1....opN ===> DONE
 *   -throwing error on duplicate prefix for a tuple while forming scoreMap : x#y#z#score : x#y#z cannot repeat ====> DONE
 *   -questionaire active inactive feilds ===> DONE
 *   -age : number feild validations
 *   -answer type enum at SQ-DB level ===> DONE
 *
 *
 *   -question-group ===> DONE
 *
 *
 *
 *
 * =======================
 * scoring assumptions :
 * =======================
 *
 * 1. assumption-1.1 : sq inside a cq/cq-group is single correct ,
 *    assumption-1.2 : sq inside a cq/cq-group has null-not-allowed
 *    (used while finding score in quiz-service)
 *
 *
 * 2. numeric RANGE based : handle with base case logic
 *    example : for platlet count , the user wont enter his platelet count , but select from drop-down RANGE
 *
 *
 *
 * 3. Question group
 *  -1st qstn will be the decisive qstion
 *  -1st qstn will be drop-down based
 *  -how to know at which qstn we are supposed to open the branch ? that will be the 1st qstion only
 *
 *
 *
 *
 *
 */


/**
 *
 *
 * to-do :
 * 1. json config
 *
 * 2. link to re-enroll
 *
 * 3. scoring : create qn
 *
 * 4. webhook => thru zap
 *
 *
 * ===========
 * 5. plan activations
 *
 *
 *
 *
 *
 *
 */





//Cleanup To-Dos
//critical-to-do: [userPlanController/razorpayController] [Create userplan on verify payment]
//to-do: [controller] [Problem Statement]
//to-do: [blogController] [Webhook auth endpoint to create]
//to-do: [companyController] [Webhook auth endpoint to create]
//to-do: [questionControllers] [Figure out internal access when admin panel comes]
//to-do: [General] [Unmount swagger as per config]