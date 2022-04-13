class I18n {
  HELLO_WORLD: string = "你好，世界！";

  // 錯誤訊息
  E404: string = "伺服器找不到請求的資源";
  E500: string = "內部伺服器錯誤";
  E502: string = "閘道錯誤";
  E503: string = "伺服器暫時無法處理連線請求";
  E504: string = "閘道逾時"
}
;
export const i18n = new I18n();
    