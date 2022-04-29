import {
  Firestore,
  doc,
  getDoc,
  DocumentData,
  query,
  collection,
  orderBy,
  getDocs,
} from "firebase/firestore";
export function getSubDocument() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * firesStoreの情報を取得する(document、subDocument)。
     * documentIdで指定しているため１つのdocument情報しか取得ができない
     * @param fireStore @type {Firestore}
     * @param documentInformation @type {AcquiredInformation}
     * @returns document、subDocumentをまとめて返却。docSnap.data() 取得した情報　失敗すればundefined
     * 　@type {Promise<DocumentData | undefined>}
     */
    async get(
      fireStore: Firestore,
      documentInformation: AnswerInformation
    ): Promise<DocumentData | undefined> {
      // document情報取得
      const docRef = doc(
        fireStore,
        documentInformation.collectionName,
        documentInformation.documentId,
        documentInformation.subCollectionName,
        documentInformation.userId
      );
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? docSnap.data() : undefined;
    },
  };
}
