class I18n {
  HELLO_WORLD: string = "你好，世界！";

  // 错误讯息
  E404: string = "服务器找不到请求的资源";
  E500: string = "内部服务器错误";
  E502: string = "闸道错误";
  E503: string = "服务器暂时无法处理连接请求";
  E504: string = "闸道逾时"
}
;
export const i18n = new I18n();
    