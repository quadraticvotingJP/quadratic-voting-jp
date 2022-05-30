// firebase
import { DocumentData } from "firebase/firestore";
export function dashboardData() {
  /**
   * @description
   * レスポンスデータをもとにDashboardを整形する
   * @param response @type {DocumentData}
   * @returns @type {Dashboard}
   */
  function conversion(response: DocumentData): Dashboard {
    const {
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      votes,
      participant,
      options,
      participantLinks,
      answer,
      documentId,
      secretKey,
    } = response; // responseDataの展開

    let participantVotesMolecule: string = ""; // [参加者数・消化クレジット数]参加者数の分子
    const participantVotesDenominator: string = participant; // [参加者数・消化クレジット数]参加者数の分母
    let effectiveVotesMolecule: string = ""; // [参加者数・消化クレジット数]消化クレジットの分子
    let digestionCredits: string = ""; // [参加者数・消化クレジット数]消化クレジットの分子
    const effectiveVotesDenominator: string = (
      Number(participant) * Number(votes)
    ).toString(); // [参加者数・消化クレジット数]消化クレジットの分母
    const grafOptions: string[] = options.map((item: Option) => item.title); // [投票数・投票率]選択肢
    let grafEffectiveVotes: number[] = []; // [投票数・投票率]投票数
    let grafPercentCredits: number[] = []; // [投票数・投票率]投票率

    // 回答が一つでもあるかないか
    if (answer.length !== 0) {
      participantVotesMolecule = answer.length.toString();
      /**
       * @description
       * [参加者数・消化クレジット数]参加者数の分子の計算
       * 1回目のreduceで回答者数分回して前回回答者の合計と足す
       * 2回目のreduceで1回答者の投票数の合計を出す
       * @param prev 前回の値が入る　初期値は第2引数に指定している0
       * @param current 次の値が入る
       * @returns 全合計値 @type {number}
       */
      effectiveVotesMolecule = answer
        .reduce((prev: number, current: Answer): number => {
          let vote = current.votes.reduce(
            (prev: number, current: AnswerOption): number =>
              prev + current.vote,
            0
          );
          return prev + vote; // returnすると次のprevに入る
        }, 0) // 初期値0を設定することにより最初のprevに0が入る
        .toString(); // 最後に数値から文字列に変換

      digestionCredits = answer
        .reduce((prev: number, current: Answer): number => {
          let vote = current.votes.reduce(
            (prev: number, current: AnswerOption): number =>
              prev + current.vote * current.vote,
            0
          );
          return prev + vote; // returnすると次のprevに入る
        }, 0) // 初期値0を設定することにより最初のprevに0が入る
        .toString(); // 最後に数値から文字列に変換

      /**
       * @description
       * [投票数・投票率]算出
       * 1回目のreduceで回答者数分回して同じ選択肢を足す
       * for分で選択肢（Id）分だけ回して同じIDであれば足す
       */
      const ids: number[] = options.map((answer: Option): number => answer.id); // 選択肢のIdを抽出
      const votes = () =>
        answer.reduce((prev: number[], current: Answer): number[] => {
          let answers: number[] = [];
          for (let index: number = 0; index < ids.length; index++) {
            const matchId = ids[index].toString() === current.votes[index].id;
            if (matchId) {
              // 同じIDであれば
              if (prev.length !== 0) {
                //初回が入れるのlengthが0のためif文を設けないとprev[index]でエラーになる
                answers.push(prev[index] + current.votes[index].vote); //2回目以降に走り前回の値とIdが一致しているもの通しを足す
              } else {
                answers.push(current.votes[index].vote); // 初回のみ走りIdのvoteがpushされれる
              }
            }
          }
          return answers;
        }, []);
      grafEffectiveVotes = votes(); // [投票数・投票率]投票数

      // [投票数・投票率]投票数 投票数を全体で割り投票率を算出
      grafPercentCredits = votes().map(
        (item: number) => (item / Number(effectiveVotesMolecule)) * 100
      );
    } else {
      // 回答が一つもなければ
      participantVotesMolecule = "0";
      effectiveVotesMolecule = "0";
      // 回答が一つもなければoptionsのlength分0をpushする
      for (let index: number = 0; index < options.length; index++) {
        grafEffectiveVotes.push(0);
        grafPercentCredits.push(0);
      }
    }

    const detailPublicationStartDate: string = publicationStartDate.replace(
      "T",
      " "
    ); // [公開開始日]確認用Data
    const formPublicationStartDate: string = publicationStartDate; // [公開開始日]フォーム用Data
    const detailPublicationEndDate: string = publicationEndDate.replace(
      "T",
      " "
    ); // [公開終了日]確認用Data
    const formPublicationEndDate: string = publicationEndDate; // [公開終了日]フォーム用のData
    const participantDashboardLink: string = `${documentId}`; // [ダッシュボード（参加者用）]
    const adminDashboardLink: string = `${documentId}?secret=${secretKey}`; // [ダッシュボード（管理者用）]管理者用URL
    const voterLinks: string = participantLinks.join("\n"); // 参加者用投票リンク

    return {
      participantVotesMolecule, // [参加者数・消化クレジット数]参加者数の分子
      participantVotesDenominator, // [参加者数・消化クレジット数]参加者数の分母
      effectiveVotesMolecule, // [参加者数・消化クレジット数]投票数の分子
      digestionCredits, // [参加者数・消化クレジット数]参加者数・消化クレジット数の分子
      effectiveVotesDenominator, // [参加者数・消化クレジット数]投票数の分母
      grafOptions, // [投票数・投票率]選択肢
      grafEffectiveVotes, // [投票数・投票率]投票数
      grafPercentCredits, // [投票数・投票率]投票率
      title, // [タイトル]
      overview, // [概要]
      detailPublicationStartDate, // [公開開始日]確認用Data
      formPublicationStartDate, // [公開開始日]フォーム用Data
      detailPublicationEndDate, // [公開終了日]確認用Data
      formPublicationEndDate, // [公開終了日]フォーム用のData
      participantDashboardLink, // [ダッシュボード（参加者用）]
      adminDashboardLink, // [ダッシュボード（管理者用）]
      voterLinks, //  [投票者リンク]
      secretKey, // シークレットキー
    };
  }
  return { conversion };
}
