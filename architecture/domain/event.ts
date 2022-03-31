import { FieldValue } from "firebase/firestore";

// api parameter
export function event(
  title: string,
  overview: string,
  publicationStartDate: string,
  publicationEndDate: string,
  participant: number,
  votes: number,
  options: Option[],
  createAt: FieldValue
): EventPostType {
  return {
    title: title,
    overview: overview,
    publicationStartDate: publicationStartDate,
    publicationEndDate: publicationEndDate,
    participant: participant,
    votes: votes,
    options: options,
    createAt: createAt,
  };
}
