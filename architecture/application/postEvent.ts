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
    const participantLinks = `${process.env.NEXT_PUBLIC_BASE_URL}/vote/${documentInfo.id}`;
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
