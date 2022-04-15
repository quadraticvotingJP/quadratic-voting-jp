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

// 回答者
interface AnswerOption {
  readonly id: string;
  readonly vote: string;
}

// 回答者
interface Answer {
  readonly id: string;
  readonly options: AnswerOption[];
}

// ダッシュボード情報取得時
interface AcquiredInformation {
  readonly collectionName: string;
  readonly documentId: string;
  readonly subCollectionName: string;
}

// ダッシュボード情報
interface DashboardData {
  readonly createAt: FieldValue;
  readonly options: Option[];
  readonly overview: string;
  readonly participant: string;
  readonly participantLinks: string[];
  readonly publicationStartDate: string;
  readonly publicationEndDate: string;
  readonly secretKey: string;
  readonly documentId: string;
  readonly title: string;
  readonly votes: string;
}
