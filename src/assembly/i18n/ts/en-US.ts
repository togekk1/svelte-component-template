class I18n {
  HELLO_WORLD: string = "Hello, World!";

  // Error Messages
  E404: string = "Not Found";
  E500: string = "Internal Server Error";
  E501: string = "Not Implemented";
  E502: string = "Bad Gateway";
  E503: string = "Service Unavailable";
  E504: string = "Gateway Timeout"
}
;
export const i18n = new I18n();
    