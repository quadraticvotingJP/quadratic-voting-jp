import { Firestore, doc, getDoc, DocumentData } from "firebase/firestore";
export function getDocumentOnly() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * firesStoreの情報を取得する(document、subDocument)。
     * documentIdで指定しているため１つのdocument情報しか取得ができない
     * @param fireStore @type {Firestore}
     * @param documentInformation @type {LpImages}
     * @returns document、subDocumentをまとめて返却。docSnap.data() 取得した情報　失敗すればundefined
     * 　@type {Promise<DocumentData | undefined>}
     */
    async get(
      fireStore: Firestore,
      documentInformation: LpImages
    ): Promise<DocumentData | undefined> {
      // document情報取得
      const docRef = doc(
        fireStore,
        documentInformation.collectionName,
        documentInformation.documentId
      );
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    },
  };
}
