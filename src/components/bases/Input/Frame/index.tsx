import { IInputFrameProps } from "@/interfaces/components/Input";

export default function InputFrame({ children, error }: IInputFrameProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="px-4 py-2 text-base shadow-md border border-neutral-200 bg-white rounded-md">
        {children}
      </div>
      {error && <p className="text-rose-600 text-sm">{error}</p>}
    </div>
  );
}
