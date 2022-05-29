export const utilsValidationRule = {
  REQUIRED: "必須です。",
  MAX_LENGTH_40: { value: 40, message: "40文字以下にしてください。" },
  MAX_LENGTH_240: { value: 240, message: "240文字以下にしてください。" },
  MIN_LENGTH_1: { value: 1, message: "40文字以下にしてください。" },
  MAX_250: { value: 250, message: "250人以下にしてください。" },
  MAX_100: { value: 100, message: "100票以下にしてください。" },
  MIN_2: { value: 2, message: "2人以上にしてください。" },
  MIN_1: { value: 1, message: "1票以上にしてください。" },
  END_DATE: { message: "公開開始日より後ろに日付を設定してください。" },
  START_DATE: { message: "公開終了日より前に日付を設定してください。" },
  OPTIONS_LENGTH_2: { message: "選択肢を２つ以上作成してください。" },
};

/**
 * @description 入力された日付が比較対象より小さいか比較
 * @param inputDate @type {string} 入力された日付　startDate
 * @param evaluationTarget @type {string}　比較する日付 endDate
 * @returns @type {string | true}　true or エラーメッセージ
 */
export function inputDateMinCheck(
  inputDate: string,
  evaluationTarget: string
): string | true {
  return new Date(inputDate) < new Date(evaluationTarget)
    ? true
    : utilsValidationRule.START_DATE.message;
}

/**
 * @description 入力された日付が比較対象より大きいか比較
 * @param inputDate @type {string} 入力された日付 endDate
 * @param evaluationTarget @type {string}　比較する日付 startDate
 * @returns @type {string | true}　true or エラーメッセージ
 */
export function inputDateMaxCheck(
  inputDate: string,
  evaluationTarget: string
): string | true {
  return new Date(inputDate) > new Date(evaluationTarget)
    ? true
    : utilsValidationRule.END_DATE.message;
}

/**
 * @description optionsが２つ以上あるかチェック
 * @param options @type {Option[]} 現在作成されている選択肢
 * @returns @type {string | true}　true or エラーメッセージ
 */
export function optionCheck(options: Option[]): string | true {
  return options !== undefined && options.length >= 2
    ? true
    : utilsValidationRule.OPTIONS_LENGTH_2.message;
}
