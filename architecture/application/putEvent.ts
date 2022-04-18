// Event作成のAPI処理
import UUID from "uuidjs";
// domain
import { put } from "@/architecture/domain/putEvent";
// adapter
import { putDocuments } from "@/architecture/adapter/updateDocument";
// firebase
import {
  getFirestore,
  collection,
  CollectionReference,
  DocumentData,
  doc,
} from "firebase/firestore";

export function putEvent() {
  async function updateEvent(
    data: DashboardFormVales,
    collectionName: string,
    documentId: any
  ) {
    const fireStore = getFirestore();
    const api = putDocuments();
    // fireStoreの保存先指定
    const usersCollectionRef: CollectionReference<DocumentData> = collection(
      fireStore,
      collectionName
    );
    // fireStoreの登録情報生成
    const documentInfo = doc(usersCollectionRef, documentId);
    const { publicationStartDate, publicationEndDate } = data;

    // parameter作成
    const updateData = put(publicationStartDate, publicationEndDate);

    // apiを叩くメソッドを走らせる
    return await api.put(documentInfo, updateData);
  }
  return { updateEvent };
}
