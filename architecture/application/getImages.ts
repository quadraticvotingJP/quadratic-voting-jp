import { getStorage, ref } from "firebase/storage";
// adapter
import { getImagesList } from "@/architecture/adapter/getImagesList";

export function getImages() {
  async function imageList(folderName: string): Promise<string[]> {
    const storage = getStorage();
    const listRef = ref(storage, folderName);
    const api = getImagesList();
    return await api.get(storage, listRef);
  }
  return { imageList };
}
