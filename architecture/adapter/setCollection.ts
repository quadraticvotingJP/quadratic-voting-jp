// 実際にAPIを叩く箇所
import {
  doc,
  setDoc,
  DocumentReference,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
export function setCollection() {
  return {
    set(
      usersCollectionRef: CollectionReference<DocumentData>,
      data: EventPostType
    ): DocumentReference<DocumentData> {
      const documentInfo = doc(usersCollectionRef);
      setDoc(documentInfo, {
        data,
      });
      // 登録するdocument情報を返す
      return documentInfo;
    },
  };
}
