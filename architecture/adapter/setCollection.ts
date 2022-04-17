import { setDoc, DocumentReference, DocumentData } from "firebase/firestore";
export function setCollection() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * fireStoreにイベント情報をsetする
     * @param documentInfo
     * 　@type {DocumentReference<DocumentData>}
     * @param data
     * 　@type {EventPostType<DocumentData>}
     * @returns @type {void}
     */
    set(
      documentInfo: DocumentReference<DocumentData>,
      data: EventPostType
    ): void {
      setDoc(documentInfo, {
        ...data,
      });
    },
  };
}
