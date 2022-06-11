//  ダッシュボード情報のAPI処理
// adapter
import { getDocumentOnly } from "@/architecture/adapter/getDocumentOnly";
// firebase
import { getFirestore, DocumentData } from "firebase/firestore";

export function getLpImages() {
  async function imageList(
    collectionName: string,
    documentId: string
  ): Promise<DocumentData | undefined> {
    const fireStore = getFirestore();
    const api = getDocumentOnly();

    return await api.get(fireStore, {
      collectionName: collectionName,
      documentId: documentId,
    });
  }
  return { imageList };
}
