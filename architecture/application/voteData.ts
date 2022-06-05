import { DocumentData } from "firebase/firestore";
export function voteData() {
  function conversion(response: DocumentData): VoteData {
    const {
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      votes,
      options,
    } = response;

    const voteOptions = options.map((option: Option) => {
      return Object.assign(option, {
        vote: 0,
        left: false,
        right: false,
        ...option,
      });
    });

    return {
      title: title,
      overview: overview,
      publicationStartDate: publicationStartDate.replace("T", " "),
      publicationEndDate: publicationEndDate.replace("T", " "),
      votes: votes,
      voteOptions,
    };
  }
  return { conversion };
}
