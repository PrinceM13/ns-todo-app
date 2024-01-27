import { Button } from "@/components/bases";

import { IDeleteAlertProps } from "@/interfaces/components/Alert";

export default function DeleteAlert({ title, onCancel, onConfirm }: IDeleteAlertProps) {
  return (
    <div className="flex flex-col gap-8 py-2">
      <div>
        Do you want to delete <span className="text-rose-600 font-bold">{`" ${title} "`}</span> ?
      </div>
      <div className="flex gap-2 self-end">
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button color="error" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}
