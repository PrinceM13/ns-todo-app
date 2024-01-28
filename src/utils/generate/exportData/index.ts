import { ITodoExportData, ITodoTableData } from "@/interfaces/components/Todo";

export default function generateExportData({ tableData }: { tableData: ITodoTableData }) {
  const exportData = tableData.data.reduce((acc: ITodoExportData[], rowList) => {
    const rowObj = rowList.reduce((acc, cell, idx) => {
      const key = tableData.columns[idx].key;
      return { ...acc, [key]: cell };
    }, {});
    return [...acc, rowObj];
  }, []);

  return exportData;
}
