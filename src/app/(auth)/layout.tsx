import { Button } from "@/components/bases";

import { IAuthLayoutProps } from "@/interfaces/layouts";

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#9EB8AD] via-[#34C7D6] to-[#2BB4E8]">
      <Button className="absolute top-10 left-10" linkTo="/" color="info" shadow>
        Back
      </Button>
      {children}
    </div>
  );
}
