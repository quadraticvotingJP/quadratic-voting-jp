import {
  doc,
  setDoc,
  DocumentReference,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
export function setCollection() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * fireStoreにイベント情報をsetする
     * @param usersCollectionRef
     * 　@type {CollectionReference<DocumentData>}
     * @param data
     * 　@type {EventPostType<DocumentData>}
     * @returns documentInfo documentIDを取得するため含まれた情報を返却
     * 　@type {DocumentReference<DocumentData>}
     */
    set(
      usersCollectionRef: CollectionReference<DocumentData>,
      data: EventPostType
    ): DocumentReference<DocumentData> {
      const documentInfo = doc(usersCollectionRef);
      setDoc(documentInfo, {
        ...data,
        documentId: documentInfo.id,
      });
      // 登録するdocument情報を返す
      return documentInfo;
    },
  };
}
