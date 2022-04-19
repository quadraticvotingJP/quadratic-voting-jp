export function getToday() {
  /**
   * @description
   * Calendarの日付制御用に本日の日付を取得
   * @returns today @type {string}
   */
  function createDate(): string {
    const newDate = new Date();
    const today = `${newDate.getFullYear()}-${(
      "0" +
      (newDate.getMonth() + 1)
    ).slice(-2)}-${("0" + newDate.getDate()).slice(-2)}T00:00`;
    return today;
  }
  return { createDate };
}
