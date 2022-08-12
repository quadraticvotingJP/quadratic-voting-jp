import { FieldValue } from "firebase/firestore";

// api parameter

/**
 * @description
 * APIに乗せるparameterを作成する
 * fireStoreに登録するイベント情報を定義する
 * @param title @type {string}
 * @param overview @type {string}
 * @param publicationStartDate @type {string}
 * @param publicationEndDate @type {string}
 * @param participant @type {number}
 * @param votes @type {number}
 * @param options @type {Option[]}
 * @param participantLinks @type {string}
 * @param documentId @type {string}
 * @param secretKey @type {string}
 * @param createAt @type {FieldValue}
 * @returns @type {EventPostType}
 */
export function event(
  title: string,
  overview: string,
  publicationStartDate: string,
  publicationEndDate: string,
  participant: number,
  votes: number,
  options: Option[],
  participantLinks: string,
  documentId: string,
  secretKey: string,
  createAt: FieldValue
): EventPostType {
  return {
    title: title,
    overview: overview,
    publicationStartDate: publicationStartDate,
    publicationEndDate: publicationEndDate,
    participant: participant,
    votes: votes,
    options: options.map((option: Option) => {
      const clone = Object.assign(option);
      delete clone["selected"];
      return clone;
    }),
    participantLinks: participantLinks,
    documentId: documentId,
    secretKey: secretKey,
    createAt: createAt,
  };
}
