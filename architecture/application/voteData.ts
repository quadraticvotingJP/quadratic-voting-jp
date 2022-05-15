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
      voteOptions,
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      votes,
    };
  }
  return { conversion };
}
