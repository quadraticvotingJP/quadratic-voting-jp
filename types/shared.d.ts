type FormType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "datetime";

// muiのButtonサイズ
type ButtonSize = "small" | "large" | "medium";

// muiのButtonタイプ
type ButtonType = "button" | "submit" | "reset" | undefined;

// muiの色
type Color =
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

// 選択肢の型
interface Option {
  readonly id: number;
  readonly title: string;
  readonly overview: string;
  readonly url: string;
}

// イベント投票時の型
interface VoteOption extends Option {
  readonly vote: number;
}

// イベント作成時の型
interface EventValues {
  readonly title: string;
  readonly overview: string;
  readonly publicationStartDate: string;
  readonly publicationEndDate: string;
  readonly participant: number;
  readonly votes: number;
  readonly options: Option[];
  readonly optionsTitle: string;
  readonly optionsOverview: string;
  readonly optionsUrl: string;
}

// 新規作成時のイベント
interface EventPostType {
  readonly title: string;
  readonly overview: string;
  readonly publicationStartDate: string;
  readonly publicationEndDate: string;
  readonly participant: number;
  readonly votes: number;
  readonly options: Option[];
  readonly secretKey: string;
  readonly createAt: FieldValue;
}

// イベント投票時の型
interface EventVoteType {
  id: string;
  eventTitle: string;
  overview: string;
  publicationStartDate: string;
  publicationEndDate: string;
  votes: number;
  options: VoteOption[];
  createAt: FieldValue;
}
