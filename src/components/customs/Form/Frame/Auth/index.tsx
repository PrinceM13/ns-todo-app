import { IIAuthFrameProps } from "@/interfaces/components/Form";

export default function AuthFrame({ children, className }: IIAuthFrameProps) {
  return (
    <form
      className={`min-w-[300px] max-w-[500px] w-[80%] px-8 py-4 md:px-12 md:py-8 rounded-lg bg-white ${className}`}
    >
      {children}
    </form>
  );
}
