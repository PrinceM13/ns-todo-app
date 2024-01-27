import { IInputFrameProps } from "@/interfaces/components/Input";

export default function InputFrame({ children }: IInputFrameProps) {
  return (
    <div className="px-4 py-2 text-base shadow-md border border-neutral-200 bg-white rounded-md">
      {children}
    </div>
  );
}
