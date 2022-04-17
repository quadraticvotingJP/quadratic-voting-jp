// Event作成のAPI処理
import UUID from "uuidjs";
// domain
import { event } from "@/architecture/domain/event";
// adapter
import { setCollection } from "@/architecture/adapter/setCollection";
// firebase
import {
  getFirestore,
  collection,
  serverTimestamp,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";

export function postEvent() {
  async function createEvent(
    data: EventValues,
    collectionName: string,
    secretKey: string
  ) {
    const fireStore = getFirestore();
    const api = setCollection();
    // fireStoreの保存先指定
    const usersCollectionRef: CollectionReference<DocumentData> = collection(
      fireStore,
      collectionName
    );
    const {
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      participant,
      votes,
      options,
    } = data;
    let participantLinks: string[] = [];
    // 参加者分の投票者リンクの作成
    for (let index: number = 0; index < participant; index++) {
      participantLinks.push(
        `http://localhost:4000/vote/id?=${UUID.generate()}`
      );
    }
    // parameter作成
    const eventData = event(
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      participant,
      votes,
      options,
      participantLinks,
      secretKey,
      serverTimestamp()
    );
    // apiを叩くメソッドを走らせる
    return await api.set(usersCollectionRef, eventData);
  }
  return { createEvent };
}
