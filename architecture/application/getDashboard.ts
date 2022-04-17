//  ダッシュボード情報のAPI処理
// domain
import { acquiredInformation } from "@/architecture/domain/acquiredInformation";
// adapter
import { getDocument } from "@/architecture/adapter/getDocument";
// firebase
import { getFirestore, DocumentData } from "firebase/firestore";

export function getDashboard() {
  function createAcquiredInformation(
    collectionName: string,
    documentId: string,
    subCollectionName: string
  ): Promise<DocumentData | undefined> {
    const fireStore = getFirestore();
    const api = getDocument();
    const documentInformation = acquiredInformation(
      collectionName,
      documentId,
      subCollectionName
    );
    return api.get(fireStore, documentInformation);
  }
  return { createAcquiredInformation };
}
