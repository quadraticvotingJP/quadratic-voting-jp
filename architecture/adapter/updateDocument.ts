import { updateDoc, DocumentReference, DocumentData } from "firebase/firestore";
export function putDocuments() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * イベントの公開日、公開終了日を更新する
     * @param documentInfo
     * 　@type {DocumentReference<DocumentData>}
     * @param data
     * 　@type {DashboardFormVales}
     * @returns @type {void}
     */
    put(
      documentInfo: DocumentReference<DocumentData>,
      data: DashboardFormVales
    ): void {
      updateDoc(documentInfo, {
        ...data,
      });
    },
  };
}
