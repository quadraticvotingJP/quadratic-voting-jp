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
  doc,
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
    // fireStoreの登録情報生成
    const documentInfo = doc(usersCollectionRef);
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
        `http://localhost:4000/vote/${documentInfo.id}?user=${UUID.generate()}`
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
      documentInfo.id,
      secretKey,
      serverTimestamp()
    );
    // apiを叩くメソッドを走らせる
    await api.set(documentInfo, eventData);
    return documentInfo;
  }
  return { createEvent };
}
