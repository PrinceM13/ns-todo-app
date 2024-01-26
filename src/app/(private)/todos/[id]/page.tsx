"use client";

import { useParams } from "next/navigation";

export default function TodoPage() {
  const param = useParams();
  const id = param.id;

  return <div>Todo: {id}</div>;
}
