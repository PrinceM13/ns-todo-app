"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/bases";

export default function TableButton() {
  const path = usePathname();

  const isTable = path === "/todos/table";

  return (
    <Button
      linkTo={isTable ? "/todos" : "/todos/table"}
      color={isTable ? "warning" : "secondary"}
      shadow
    >
      {isTable ? "Todo" : "Table"}
    </Button>
  );
}
