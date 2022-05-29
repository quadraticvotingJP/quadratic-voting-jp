// api parameter
/**
 * @description
 * APIに乗せるparameterを作成する
 * fireStoreに更新する日付をを定義する
 * @param publicationStartDate @type {string}
 * @param publicationEndDate @type {string}
 * @returns @type {DashboardFormVales}
 */
export function create(
  publicationStartDate: string,
  publicationEndDate: string
): DashboardFormVales {
  return {
    publicationStartDate: publicationStartDate,
    publicationEndDate: publicationEndDate,
  };
}
