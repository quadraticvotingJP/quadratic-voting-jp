// Grafのエクセルダウンロード
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
type Option = {
  title: string;
  effective_votes: number;
  percent_credits: number;
};

export function downloadXlsx() {
  function download(
    options: string[],
    effectiveVotes: number[],
    percentCredits: number[]
  ): void {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const rows: Option[] = [];
    for (var i = 0; i < options.length; i++) {
      const option: Option = {
        title: options[i],
        effective_votes: effectiveVotes[i],
        percent_credits: percentCredits[i],
      };
      rows.push(option);
    }
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
    });
    const fileData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(
      fileData,
      `投票数・投票率 - QuadraticVoting.jp${fileExtension}`
    );
  }
  return { download };
}
