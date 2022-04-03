// Event作成のAPI処理
// domain
import { event } from "@/architecture/domain/event";
// adapter
import { setCollection } from "@/architecture/adapter/setCollection";
// firebase
import { getFirestore, collection, serverTimestamp } from "firebase/firestore";

export function postEvent() {
  async function createEvent(
    data: EventValues,
    collectionName: string,
    secretKey: string
  ) {
    const fireStore = getFirestore();
    const api = setCollection();
    // fireStoreの保存先指定
    const usersCollectionRef = collection(fireStore, collectionName);
    const {
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      participant,
      votes,
      options,
    } = data;
    // parameter作成
    const eventData = event(
      title,
      overview,
      publicationStartDate,
      publicationEndDate,
      participant,
      votes,
      options,
      secretKey,
      serverTimestamp()
    );
    // apiを叩くメソッドを走らせる
    return await api.set(usersCollectionRef, eventData);
  }
  return { createEvent };
}
