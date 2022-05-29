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
      // リストの一覧を取得する
      const list = await listAll(listRef);
      // https://stackoverflow.com/questions/63947261/firebase-getdownloadurl-push-into-array
      // リストの中身一つ一つにgetDownloadURLを実行して画像のリンクを取得する
      const promises = list.items.map(
        async (imgRef) => await getDownloadURL(ref(storage, imgRef.fullPath))
      );
      const imgList: string[] = await Promise.all(promises).then(
        (imgNameArray) => Promise.resolve(imgNameArray)
      );
      return imgList;
    },
  };
}
