// hooks
import { createContext, useState, useContext } from "react";
import { CircularProgress } from "@mui/material";

// コンテキストと利用するための初期宣言
const LoadingContext: React.Context<any> = createContext("");

//　インポート先（子）で下でvalueに設定しているものを参照するために設定
export function useLoadingContext() {
  return useContext(LoadingContext);
}

// 共通で使うため_appで流す
export function LoadingProvider({ children }: any) {
  // ローディング
  const [loading, setLoading] = useState<boolean>(false);

  // objectにしてrootからプロバイドする
  const provideValues = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={provideValues}>
      {loading && (
        <>
          {/* todo:heightがなぜか当たらないので空要素を置く、、、、 */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex justify-center items-center">
            <CircularProgress color="info" size={80} />
          </div>
        </>
      )}
      {!loading && children}
    </LoadingContext.Provider>
  );
}
