// firebase
import { DocumentData } from "firebase/firestore";
export function dashboardData() {
  /**
   * @description
   * レスポンスデータをもとにDashboardDataを整形する
   * @param eventData @type {DocumentData}
   * @returns @type {DashboardData}
   */
  function conversion(eventData: DocumentData): any {
    const {
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      votes,
      participant,
      options,
      participantLinks,
      createAt,
      answer,
      documentId,
      secretKey,
    } = eventData;
    console.log(answer);

    let participantAndEffectiveVotesMolecule: string = ""; // 参加者数の分子
    let effectiveVotesMolecule: string = ""; // 投票数の分子
    let grafEffectiveVotes: number[] = []; // 投票数
    let grafPercentCredits: number[] = []; // 投票率

    // 回答があるかないか
    if (answer.length !== 0) {
      participantAndEffectiveVotesMolecule = answer.length.toString();
      effectiveVotesMolecule = "0"; // todo計算する
      grafEffectiveVotes = [20, 10, 33]; // todo計算する
      grafPercentCredits = [100, 20, 48]; // todo計算する
    } else {
      participantAndEffectiveVotesMolecule = "0";
      effectiveVotesMolecule = "0";
      grafEffectiveVotes = [];
      grafPercentCredits = [];
    }

    const effectiveVotesDenominator: string = (
      Number(participant) * Number(votes)
    ).toString(); // 投票数の分母
    const detailPublicationStartDate: string = publicationStartDate.slice(
      0,
      10
    ); //確認用公開開始日のData
    const detailPublicationEndDate: string = publicationEndDate.slice(0, 10); //確認用公開終了日のData
    const adminPath: string = `${documentId}&secret=${secretKey}`; // 管理者用URL
    const participantPath: string = `${documentId}`; // 参加者用URL
    const grafOptions: string[] = options.map((item: Option) => item.title); // Grafの選択肢
    // const detailParticipantLinks: string = participantLinks.join("\n"); // 参加者用投票リンク

    return {
      title, // イベントタイトル
      overview, // イベント概要
      votes, // 一人あたりの投票数
      grafEffectiveVotes, // 投票数
      grafPercentCredits, // 投票率
      participantAndEffectiveVotesMolecule, // 参加者数の分子
      effectiveVotesMolecule, // 投票数の分子
      effectiveVotesDenominator, // 投票数の分母
      detailPublicationStartDate, //確認用公開開始日のData
      publicationStartDate, //フォーム公開開始日のData
      detailPublicationEndDate, //確認用公開終了日のData
      publicationEndDate, //フォーム公開終了日のData
      participantLinks, // 参加者用投票リンク
      // detailParticipantLinks, //  整形後参加者用投票リンク
      participant, //参加者数
      adminPath, // 管理者用URL
      participantPath, // 参加者用URL
      options, // 選択肢
      grafOptions, // Grafの選択肢
      createAt, // 作成日
      secretKey, // シークレットキー
    };
  }
  return { conversion };
}
