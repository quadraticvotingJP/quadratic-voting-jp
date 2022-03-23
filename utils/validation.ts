export const utilsValidationRule = {
  REQUIRED: "必須です。",
  MAX_LENGTH_40: { value: 40, message: "40文字以下にしてください。" },
  MAX_LENGTH_240: { value: 240, message: "240文字以下にしてください。" },
  MIN_LENGTH_1: { value: 1, message: "40文字以下にしてください。" },
  MAX_250: { value: 250, message: "250人以下にしてください。" },
  MAX_100: { value: 100, message: "100票以下にしてください。" },
  MIN_2: { value: 2, message: "2人以上にしてください。" },
  MIN_1: { value: 1, message: "1票以上にしてください。" },
  DATE: { message: "公開開始日より後ろに日付を設定してください。" },
};
