"use client";

import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

import { convert, generate } from "@/utils";
import { valtioState } from "@/stores";

import { Button } from "@/components/bases";

import { ITodoExportData, ITodoTableColumn, ITodoTableData } from "@/interfaces/components/Todo";
import { useModal, useScreenSize } from "@/hooks";

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
  const { windowWidth } = useScreenSize();
  const { CustomModal, openModal, closeModal } = useModal();

  const [exportData, setExportData] = useState<ITodoExportData[]>([]);

  const dataList = todos?.reduce((acc: (string | number)[][], todo, idx) => {
    const { _id, title, description, createdAt } = todo;
    acc.push([_id, idx + 1, title, description, convert.date.toGregorian(new Date(createdAt))]);
    return acc;
  }, []);

  const tableData: ITodoTableData = { columns, data: dataList };

  useEffect(() => {
    if (windowWidth < 768) {
      openModal();
    } else {
      closeModal();
    }
  }, [windowWidth, openModal, closeModal]);

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

      {/* modal for mobile */}
      <CustomModal disableClickOutsideClose title="Optimize Your Experience" type="warning">
        <div className="flex flex-col gap-8">
          <h5 className="max-w-[220px] sm:max-w-[360px]">
            Please open this page on{" "}
            <span className="text-xl text-teal-600">desktop or tablet</span> to see proper table
            content.
          </h5>
          <Button className="self-center" linkTo="/todos">
            Back to Todo List
          </Button>
        </div>
      </CustomModal>
    </>
  );
}
