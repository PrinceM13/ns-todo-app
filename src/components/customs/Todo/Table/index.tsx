"use client";

import { useState } from "react";
import { useSnapshot } from "valtio";

import { convert, generate } from "@/utils";
import { valtioState } from "@/stores";

import { Button } from "@/components/bases";

import { ITodoExportData, ITodoTableColumn, ITodoTableData } from "@/interfaces/components/Todo";

const columns: ITodoTableColumn[] = [
  {
    key: "id",
    name: "#"
  },
  {
    key: "no",
    name: "No."
  },
  {
    key: "title",
    name: "Title"
  },
  {
    key: "description",
    name: "Description"
  },
  {
    key: "createdAt",
    name: "Created Date"
  }
];

export default function TodosTable() {
  const todos = useSnapshot(valtioState.general).todos;
  const [exportData, setExportData] = useState<ITodoExportData[]>([]);

  const dataList = todos?.reduce((acc: (string | number)[][], todo, idx) => {
    const { _id, title, description, createdAt } = todo;
    acc.push([_id, idx + 1, title, description, convert.date.toGregorian(new Date(createdAt))]);
    return acc;
  }, []);

  const tableData: ITodoTableData = { columns, data: dataList };

  return (
    <>
      <table className="w-full border border-neutral-400">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="border border-neutral-400 p-2">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList?.map((row, index) => (
            <tr key={index}>
              {row.map((cell) => (
                <td key={cell} className="border border-neutral-400 p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        onClick={() => {
          setExportData(generate.exportData({ tableData }));
        }}
      >
        Generate Table Data
      </Button>

      <pre className="px-16 py-8 max-h-[400px] overflow-y-auto rounded-xl bg-[#00000033]">
        {exportData.length > 0 ? (
          JSON.stringify(exportData, null, 2)
        ) : (
          <div className="w-full text-center">
            {`Click on "Generate Table Data" button to see table data.`}
          </div>
        )}
      </pre>
    </>
  );
}
