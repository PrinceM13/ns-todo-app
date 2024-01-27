import { axios } from "@/utils";

const getAll = async () => {
  const res = await axios.get("/todos");
  return res.data;
};

const create = async ({ title, description }: { title: string; description: string }) => {
  const res = await axios.post("/todos", {
    title,
    description
  });
  return res.data;
};

const get = async ({ id }: { id: string }) => {
  const res = await axios.get(`/todos/${id}`);
  return res.data;
};

const update = async ({
  id,
  title,
  description
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const res = await axios.put(`/todos/${id}`, {
    title,
    description
  });
  return res.data;
};

const remove = async ({ id }: { id: string }) => {
  const res = await axios.delete(`/todos/${id}`);
  return res.data;
};

export { getAll, create, get, update, remove };
