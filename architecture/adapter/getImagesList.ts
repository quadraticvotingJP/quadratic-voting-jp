import {
  ref,
  getDownloadURL,
  listAll,
  StorageReference,
  FirebaseStorage,
} from "firebase/storage";
export function getImagesList() {
  return {
    /**
     * @description
     * 実際にAPIを叩く箇所
     * firebase storageの画像をを取得する
     * @param storage
     * @param listRef @type {AcquiredInformation}
     * @returns 画像の一覧
     */
    async get(
      storage: FirebaseStorage,
      listRef: StorageReference
    ): Promise<string[]> {
      const imgList: string[] = [];
      // リストの一覧を取得する
      const list = await listAll(listRef);
      // リストの中身一つ一つにgetDownloadURLを実行して画像のリンクを取得する
      await list.items.forEach(async (itemRef: StorageReference) => {
        await getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
          imgList.push(url);
        });
      });
      return imgList;
    },
  };
}
