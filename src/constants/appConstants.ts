
export enum UserTypeEnum {
  B2B = "B2B",
  B2C = "B2C"
};


export enum UserRolesEnum {
  DEV = "DEV",
  SADMIN = "SADMIN",
  ADMIN = "ADMIN",
  COMPANY_ADMIN = "CADMIN", //HR 
  USER = "USER",
  WEBHOOK = "WEBHOOK",
  PARTNER = "PARTNER"
}

export class ErrorMessage {

  static ROLL_BACK = "Internal server error while performing a transaction . Please try after some time.";
  static INVALID_ID = "Invalid id in request.";
  static GENERIC_ERROR = "Internal Server Error.";
  static NOT_FOUND = "No entries found.";

  static ORDER_REFERNCE = "User or User-Plan does not exist.";

  static MISSING_ORDER_FORM = "Cannot create order without missing details.";

  static OVERLAPPING_SUB_BENEFITS = "Cannot create Base-plan with overlapping sub-benefits.";

  static EMAIL_OR_PHONE_EXISTS = "The emailId or phone number already exists.";

  static EMAIL_EXISTS = "The emailId already exists.";


  static EMAIL_AND_PHONE_NOT_FOUND = "Please enter Email or Phone to login.";

  static WRONG_CREDENTIALS = "Wrong credentials.";
  static ACCESS_TOKEN_EXPIRED = "Access token expired.";
  static REFRESH_TOKEN_EXPIRED = "Refresh token expired. Please login again.";
  static MISSING_REFRESH_TOKEN = "refresh token is missing.";
  static UN_AUTHORIZED = "Unauthorized access token.";

  static OTP_EXPIRED = "OTP has expired, please generate a new OTP";
  static OTP_INCORRECT = "Incorrect OTP or Mobile Number";
  static OTP_VERIFICATION_FAILED = "OTP verification failed.";
  static USER_NOT_FOUND = "No user found with given details.";
  static USER_BASEPLAN_IPD_NOT_FOUND = "User baseplan ipd details not found"
  static USER_BASEPLAN_IPD_SUBBENEFIT_NOT_FOUND = "User baseplan ipd sub benefit details not found"
  static FAILED = "failed";
  static UNABLE_TO_SEND_OTP = "unable to send otp on number.";

  static PHONE_NOT_FOUND = "phone number not found in records.";
  static EMAIL_NOT_FOUND = "email not found in records.";
  static ADDRESS_INDEX_OUT_OF_BOUNDS = "address index out of bounds"

  static WRONG_CARD_DETAILS = "Wrong card details provided.";
  static INVALID_SQ_IDS = "Some invalid ids of simple question in request.";
  static INVALID_CQ_IDS = "Some invalid ids of complex question in request.";


  static PAYMENT_PAYLOAD_DETAILS = "Please check your payment details payload. Invalid payload";
  static INVALID_PAYLOAD = "Invalid payload for razorpay"

  static EMPTY_WEBHOOK_PAYLOAD = "Razorpay webhook returned empty payload"


  static INVALID_PLAN_DETAILS = "Invalid plan details payload";
  static INVALID_ORDER_DETAILS = "Invalid order details payload";
  static INVALID_SUBSCRIPTION_DETAILS = "Invalid subsciption details payload";
  static ORDER_NOT_FOUND = "No order-record was found for this Hubspot Ticket Id";
  static NO_ORDER_FOUND = "Order not found for given order ID";

  static USER_NOT_SUBSCRIBER = "Sorry! You are not allowed to place any orders till you are on-boarded. Please contact customer support to check your on-boarding status.";
  static USER_BLOCKED_MSG = "Your subscription has been cancelled. Please contact customer support";
  static USER_PAID_MSG = "You cannot give the quiz at the moment";
  static USER_SUBSCRIBER_MSG = "You cannot give the quiz at the moment";


  static NO_SKU_FOUND = "no sku found!";
  static INVOKE_MASKED_MOBILE = "Email Validation Failed or phone Validation Failed. Please try to invoke CRQ externally.";
  static INVALID_PAYLOAD_EXPERIAN = "Invalid Experian Payload";
  static INVALID_PINCODE = "Invalid Pincode passed in experian payload";
  static INVALID_FULLNAME = "Invalid Fullname passed in payload";
  static EXPERIAN_OTP_MISMATCH = "OTP validation failed, OTP is not match";
  static EXPERIAN_OTP_EXPIRED = "OTP validation failed, OTP is already expired";
  static EXPERIAN_REGISTER_AGAIN = "OTP validation already tried,register consumer again for new OTP"
  static EXPERIAN_NUMBER_MISMATCH = "OTP validation failed, mobile number is not matching with which consumer registered for an OTP";
  static EXPERIAN_CONSUMER_RECORD_NOT_FOUND = "consumer record not found";
  static EXPERIAN_CRITICAL_ERROR_CODE = "0";

  static TOO_MANY_REQUESTS = "Too many attempts. Please retry in some time.";
  static INVALID_BASE_URL = "Invalid baseUrl in request. Please Retry after some time.";



}




export class ErrorCode {

  static GENERIC_CLIENT_ERROR = 400;
  static ACCESS_TOKEN_EXPIRED = 410;
  static REFRESH_TOKEN_EXPIRED = 411;
  static OTP_EXPIRED = 412;
  static OTP_INCORRECT = 413;
  static USER_NOT_SUBSCRIBER = 414;
  static GENERIC_SERVER_ERROR = 500;
  static TOO_MANY_REQUESTS = 429;

}



export class MiscCode {
  static SUCCESS = 200;
  static USER_QUIZ_REGISTERED_AND_DORMANT = 214;
  static USER_QUIZ_PROHIBITION = 215;
  static EXPERIAN_OTP_FALLBACK = 219;

}

export class MiscMessages {
  static SUCCESS = "success";
  static FAILURE = "failed";

  static NO_OPERATION = "no-operation";
  static CREATED = "created";
  static UPDATED = "updated";
  static ACTIVATED = "activated";
  static DE_ACTIVATED = "de-activated";

  static SKIP_SLACK_MSG = 'skipping slack-notification';
  static SKIP_HS_MSG = 'skipping hubspot operation in non-prod environment';

  static TICKET_SUCCESS_MSG = 'Successfully created ticket in Hubspot';
  static TICKET_FAILURE_MSG = 'Failure while creating ticket in Hubspot';
  static PLAN_PURCHASE_MSG = 'Yayy !! A plan was puchased on the Website';
  static QUIZ_EVALUATION_MSG = 'A user gave the quiz on the website';
  static FLUSH_ZAP_MSG = 'Flushing user quiz history and plan , ZAP was triggered with these stats';
  static ACTIVE_INACTIVE_ZAP_MSG = 'user active/inactive ZAP was triggered with these stats';

  static SOMETING_WENT_WRONG = 'ALERT : Critical Error';
  static MEDPAY_WEBHOOK_TRIGGERED = 'ALERT :Medpay webhook triggered';
  static PLAN_EXPIRED = `ALERT : User's plan has expired`;

}








export enum QueueEventEnum {
  QUIZ = "QUIZ",
  PURCHASE = "PURCHASE",
  DOB_UPDATE = "DOB_UPDATE",
  LIFECYCLE_UPDATE = "LIFECYCLE_UPDATE",

  FIRST_LOGIN = "FIRST_LOGIN",
  APP_USAGE = "APP_USAGE",


  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",

  CONTACT_PATCH = "CONTACT_PATCH",
  EXPERIAN_REPORT = "EXPERIAN_REPORT",


  ORDER_CREATE_NON_MEDICINE = "ORDER_CREATE_NON_MEDICINE",
  ORDER_CREATE_MEDICINE = "ORDER_CREATE_MEDICINE",
  ORDER_UPDATE_MEDICINE = "ORDER_UPDATE_MEDICINE",

  ORDER_PROCESSED = "ORDER_PROCESSED",
  PPMC_TEST = "PPMC_TEST",

  UPDATE_USER_PRIMARY_ADDRESS = "UPDATE_USER_PRIMARY_ADDRESS",
  UPDATE_PAYMENT_DETAILS = "UPDATE_PAYMENT_DETAILS",

  PARTNER_ORDER_STATUS_UPDATE = "PARTNER_ORDER_STATUS_UPDATE",
  CUSTOMER_ORDER_FEEDBACK = "CUSTOMER_ORDER_FEEDBACK",
  SEND_LOGIN_URL_TO_HUBSPOT = "SEND_LOGIN_URL_TO_HUBSPOT",
  USER_PREFERRED_LANGUAGE = "USER_PREFERRED_LANGUAGE",
  SEND_USER_GOOGLE_CLIENT_ID = "SEND_USER_GOOGLE_CLIENT_ID",
  EMERGENCY_CASE_TICKET = "EMERGENCY_CASE_TICKET",
  EMERGENCY_CASE_TICKET_PROCESSED = "EMERGENCY_CASE_TICKET_PROCESSED",
  UPDATE_SRC_MEDIUM_POST_SIGNUP = "UPDATE_SRC_MEDIUM_POST_SIGNUP",
  UPDATE_USER_PLAN_SELECTION = "UPDATE_USER_PLAN_SELECTION",
  UPDATE_USER_ZOHO_CUSTOMER_ID = "UPDATE_USER_ZOHO_CUSTOMER_ID",
  UPDATE_USER_KNOWLARITY_STATUS = "UPDATE_USER_KNOWLARITY_STATUS"
};









export enum AllowedRateLimitCount {
  OTP = 5,
  LOGIN_WITH_EMAIL = 5
}



export enum AllowedRateLimitTime {
  OTP = 300,
  LOGIN_WITH_EMAIL = 300
}


//these constant used when we need time in seconds some-where , instead of hard-coding
export class TimeInSeconds {
  static MINUTES_5 = 300;
  static MINUTES_10 = 600;
  static MINUTES_30 = 1800;
}