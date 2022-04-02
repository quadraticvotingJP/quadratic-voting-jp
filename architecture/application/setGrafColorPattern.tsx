interface Color {
  background: string[];
  border: string[];
}

// Grafの色とボーダーの色を選択肢分作成する
export function setGrafColorPattern() {
  function setColor(labelLength: number): Color {
    const color: Color = { background: [], border: [] };
    const min = 0;
    const max = 255;
    for (let index = 0; index < labelLength; index++) {
      const Red: number = mathRandom();
      const Green: number = mathRandom();
      const Blue: number = mathRandom();
      color.background.push(`rgba(${Red}, ${Green}, ${Blue}, 0.2)`);
      color.border.push(`rgba(${Red}, ${Green}, ${Blue})`);
    }
    function mathRandom(): number {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    return color;
  }
  return { setColor };
}
