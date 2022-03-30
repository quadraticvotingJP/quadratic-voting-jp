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
  title: string;
  overview: string;
  url: string;
}

// イベント作成時の型
interface EventValues {
  title: string;
  overview: string;
  publicationStartDate: string;
  publicationEndDate: string;
  participant: number;
  votes: number;
  options: Option[];
  optionsTitle: string;
  optionsOverview: string;
  optionsUrl: string;
}
