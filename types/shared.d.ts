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
  readonly participantLinks: string[];
  readonly documentId: string;
  readonly secretKey: string;
  readonly createAt: FieldValue;
}

// 回答者
interface AnswerOption {
  readonly id: string;
  readonly vote: number;
}

// 回答者
interface Answer {
  readonly votes: AnswerOption[];
}

// ダッシュボード情報取得時
interface AcquiredInformation {
  readonly collectionName: string;
  readonly documentId: string;
  readonly subCollectionName: string;
}

// ダッシュボード情報
interface DashboardData {
  readonly participantVotesMolecule: string; // [参加者数・投票数]参加者数の分子
  readonly participantVotesDenominator: string; // [参加者数・投票数]参加者数の分母
  readonly effectiveVotesMolecule: string; // [参加者数・投票数]投票数の分子
  readonly effectiveVotesDenominator: string; // [参加者数・投票数]投票数の分母
  readonly grafOptions: string[]; // [投票数・投票率]選択肢
  readonly grafEffectiveVotes: number[]; // [投票数・投票率]投票数
  readonly grafPercentCredits: number[]; // [投票数・投票率]投票率
  readonly title: string; // [タイトル]
  readonly overview: string; // [概要]
  readonly detailPublicationStartDate: string; // [公開開始日]確認用Data
  readonly formPublicationStartDate: string; // [公開開始日]フォーム用Data
  readonly detailPublicationEndDate: string; // [公開終了日]確認用Data
  readonly formPublicationEndDate: string; // [公開終了日]フォーム用のData
  readonly participantDashboardLink: string; // [ダッシュボード（参加者用）]
  readonly adminDashboardLink: string; // [ダッシュボード（管理者用）]
  readonly voterLinks: string; //  [投票者リンク]
}
