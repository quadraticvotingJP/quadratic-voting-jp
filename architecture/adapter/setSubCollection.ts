import {
  setDoc,
  DocumentReference,
  DocumentData,
  doc,
} from "firebase/firestore";
export function setSubCollection() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * fireStoreにイベント情報をsetする
     * @param documentInfo
     * 　@type {DocumentReference<DocumentData>}
     * @param data
     * 　@type {EventPostType}
     * @returns @type {void}
     */

    set<T>(documentInfo: DocumentReference<DocumentData>, data: T): void {
      try {
        setDoc(documentInfo, {
          ...data,
        });
      } catch (error: any) {
        throw new Error(error);
      }
    },
  };
}
