// 投票情報のAPI処理

// domain
import { answerStatus } from "@/architecture/domain/answer";
// adapter
import { getSubDocument } from "@/architecture/adapter/getSubDocument";
// firebase
import { DocumentData, getFirestore } from "firebase/firestore";

export function getAnswerData() {
  async function answerInformation(
    collectionName: string,
    documentId: string,
    subCollectionName: string,
    userId: string
  ): Promise<DocumentData | undefined> {
    const firestore = getFirestore();
    const api = getSubDocument();
    const documentInformation = answerStatus(
      collectionName,
      documentId,
      subCollectionName,
      userId
    );
    return await api.get(firestore, documentInformation);
  }
  return { answerInformation };
}
