// api parameter

/**
 * @description
 * 実際にAPIを叩く箇所
 * ダッシュボード情報を取得するためのcollection名document名subCollection名を定義する
 * @param collectionName @type {string}
 * @param documentId @type {string}
 * @param subCollectionName @type {string}
 * @returns AcquiredInformation　@type {AcquiredInformation}
 */
export function acquiredInformation(
  collectionName: string,
  documentId: string,
  subCollectionName: string
): AcquiredInformation {
  return {
    collectionName: collectionName,
    documentId: documentId,
    subCollectionName: subCollectionName,
  };
}
