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
 * @param participantLinks @type {string[]}
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
  participantLinks: string[],
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
    options: options,
    participantLinks: participantLinks,
    secretKey: secretKey,
    createAt: createAt,
  };
}
