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
  readonly selected?: boolean;
}

// イベント投票時の型
interface VoteOption extends Option {
  readonly vote: number;
  readonly left: boolean;
  readonly right: boolean;
}

interface VoteData {
  readonly title: string;
  readonly overview: string;
  readonly publicationStartDate: string;
  readonly publicationEndDate: string;
  readonly votes: number;
  readonly voteOptions: VoteOption[];
  readonly optionTitleArray: string[];
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
  readonly participantLinks: string;
  readonly documentId: string;
  readonly secretKey: string;
  readonly createAt: FieldValue;
}

// イベント投票時の型
interface EventVoteType {
  readonly id: string;
  readonly title: string;
  readonly overview: string;
  readonly publicationStartDate: string;
  readonly publicationEndDate: string;
  readonly votes: number;
  readonly options: VoteOption[];
  // readonly createAt: FieldValue;
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

// 回答済み情報
interface AnswerInformation {
  readonly collectionName: string;
  readonly documentId: string;
  readonly subCollectionName: string;
  readonly userId: string;
}

// ダッシュボード情報取得時
interface AcquiredInformation {
  readonly collectionName: string;
  readonly documentId: string;
  readonly subCollectionName: string;
}

// ダッシュボード情報取得時
interface LpImages {
  readonly collectionName: string;
  readonly documentId: string;
}

// ダッシュボード情報
interface Dashboard {
  readonly participantVotesMolecule: string; // [参加者数・投票数]参加者数の分子
  readonly participantVotesDenominator: string; // [参加者数・投票数]参加者数の分母
  readonly digestionCreditsMolecule: string; // [参加者数・投票数]クレジットの分子
  readonly digestionCreditsDenominator: string; // [参加者数・投票数]投票数の分母
  readonly grafHeight: number; // [投票数・投票率]グラフの高さ
  readonly grafOptions: string[]; // [投票数・投票率]選択肢
  readonly grafEffectiveVotes: number[]; // [投票数・投票率]投票数
  readonly grafPercentCredits: number[]; // [投票数・投票率]投票率
  readonly title: string; // [タイトル]
  readonly overview: string; // [概要]
  detailPublicationStartDate: string; // [公開開始日]確認用Data  Dashboardの更新するためreadonlyを外す
  formPublicationStartDate: string; // [公開開始日]フォーム用Data  Dashboardの更新するためreadonlyを外す
  detailPublicationEndDate: string; // [公開終了日]確認用Data  Dashboardの更新するためreadonlyを外す
  formPublicationEndDate: string; // [公開終了日]フォーム用のData  Dashboardの更新するためreadonlyを外す
  readonly participantDashboardLink: string; // [ダッシュボード（参加者用）]
  readonly adminDashboardLink: string; // [ダッシュボード（管理者用）]
  readonly voterLinks: string; //  [投票者リンク]
  readonly secretKey: string; //  シークレットキー
}

// ダッシュボード更新
interface DashboardFormVales {
  readonly publicationStartDate: string;
  readonly publicationEndDate: string;
}

// 投票画面のquery
interface VotePageQuery {
  readonly user?: string;
  readonly id?: string;
}

// adsbygoogle の型定義
interface Window {
  adsbygoogle?: { [key: string]: unknown }[];
}
