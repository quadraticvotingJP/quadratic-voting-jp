// 実際にAPIを叩く箇所
import { doc, setDoc } from "firebase/firestore";
export function setCollection() {
  return {
    set(usersCollectionRef: any, eventData: EventPostType) {
      const documentInfo = doc(usersCollectionRef);
      setDoc(documentInfo, {
        eventData,
      });
      // 登録するdocument情報を返す
      return documentInfo;
    },
  };
}
