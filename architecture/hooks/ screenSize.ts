// hooks
import { useState, useEffect } from "react";

/**
 * @description
 * 現在表示している画面サイズを取得する
 * @return @type {number} width
 */
export const useScreenSize = () => {
  // 画面サイズ
  const [width, setWidth] = useState(0);
  const PC1025: number = 1025;
  const TAB1024: number = 1024;
  const SP560: number = 560;
  const SIZE_PC = width >= PC1025;
  const SIZE_TAB = TAB1024 >= width && width > SP560;
  const SIZE_SP = SP560 >= width;
  // 画面サイズをセット
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  // 初期表示時の画面取得
  useEffect(() => {
    updateWidth();
  }, []);
  // 画面サイズのwatch
  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    });
    return () => window.removeEventListener(`resize`, updateWidth);
  });
  const RESPONSIVE = { SIZE_PC: SIZE_PC, SIZE_TAB: SIZE_TAB, SIZE_SP: SIZE_SP };
  return RESPONSIVE;
};
