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
export function getDocument() {
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
      documentInformation: AcquiredInformation
    ): Promise<DocumentData | undefined> {
      // document情報取得
      const docRef = doc(
        fireStore,
        documentInformation.collectionName,
        documentInformation.documentId
      );
      const docSnap = await getDoc(docRef);
      // subDocument情報取得
      const subDocument: Answer[] = [];
      const usersCollectionRef = query(
        collection(
          fireStore,
          documentInformation.collectionName,
          documentInformation.documentId,
          documentInformation.subCollectionName
        )
        // orderBy("createAt")
        // 第2引数で昇順、降順指定
      );
      const querySnapshot = await getDocs(usersCollectionRef);
      await querySnapshot.forEach((doc: any): void => {
        subDocument.push(doc.data());
      });

      return docSnap.exists()
        ? subDocument.length !== 0
          ? { ...docSnap.data(), answer: subDocument } // 回答(answer)がある場合回答一覧を返す
          : { ...docSnap.data(), answer: [] } // 回答(answer)がない場合空配列を返す
        : undefined;
    },
  };
}
