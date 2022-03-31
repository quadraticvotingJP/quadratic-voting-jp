// 実際にAPIを叩く箇所
import { doc, setDoc } from "firebase/firestore";
export function setCollection() {
  return {
    set(usersCollectionRef: any, eventData: EventPostType) {
      return setDoc(doc(usersCollectionRef), {
        eventData,
      });
    },
  };
}
