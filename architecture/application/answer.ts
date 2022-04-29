// domain
import { vote } from "@/architecture/domain/answer";
// adapter
import { setSubCollection } from "@/architecture/adapter/setSubCollection";
// firebase
import {
  getFirestore,
  collection,
  CollectionReference,
  DocumentData,
  doc,
} from "firebase/firestore";

export function answer() {
  async function voteEvent(
    data: Answer,
    collectionName: string,
    targetDocument: string,
    subCollectionName: string
  ) {
    const fireStore = getFirestore();
    const api = setSubCollection();
    // fireStoreの保存先指定
    const usersCollectionRef: CollectionReference<DocumentData> = collection(
      fireStore,
      collectionName,
      targetDocument,
      subCollectionName
    );
    // fireStoreの登録情報生成
    const documentInfo = doc(usersCollectionRef);
    const { votes } = data;
    // parameter作成
    const eventData = vote(votes);
    // apiを叩くメソッドを走らせる
    await api.set(documentInfo, eventData);
    return documentInfo;
  }
  return { voteEvent };
}
