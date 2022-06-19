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

export function eventDateAuthorize() {
  /**
   * @description 開始前かどうかの確認
   * @param publicationStartDate 開始日
   * @returns boolean
   */
  function beforePublicationStartDate(publicationStartDate: string): boolean {
    const now: Date = getNow();
    return new Date(publicationStartDate) > now;
  }

  /**
   * @description 終了後かどうか確認
   * @param publicationEndDate 終了日
   * @returns boolean
   */
  function afterPublicationEndDate(publicationEndDate: string): boolean {
    const now = getNow();
    return new Date(publicationEndDate) < now;
  }

  function getNow() {
    return JSON.parse(
      JSON.stringify(
        new Date().toLocaleString("ja", {
          timeZone: "Asia/Tokyo",
        })
      )
    );
  }

  return {
    beforePublicationStartDate,
    afterPublicationEndDate,
  };
}
