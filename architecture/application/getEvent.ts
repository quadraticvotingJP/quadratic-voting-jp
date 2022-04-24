// 投票情報のAPI処理

// domain
import { acquiredInformation } from "@/architecture/domain/acquiredInformation";
// adapter
import { getDocument } from "@/architecture/adapter/getDocument";
// firebase
import { DocumentData, getFirestore } from "firebase/firestore";

export function getEventData() {
  async function createAcquiredInformation(
    collectionName: string,
    documentId: string,
    subCollectionName: string
  ): Promise<DocumentData | undefined> {
    const firestore = getFirestore();
    const api = getDocument();
    const documentInformation = acquiredInformation(
      collectionName,
      documentId,
      subCollectionName
    );
    return await api.get(firestore, documentInformation);
  }
  return { createAcquiredInformation };
}
