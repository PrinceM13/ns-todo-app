import { PrivateRoute } from "@/routes";

import { Button } from "@/components/bases";
import { CustomButton, UserAccount } from "@/components/customs";

import { IPrivateLayoutProps } from "@/interfaces/layouts";

export default function PrivateLayout({ children }: IPrivateLayoutProps) {
  return (
    <PrivateRoute>
      <div className="h-screen flex flex-col">
        <div className="h-20 flex justify-between items-center px-8 py-2 border-b-2 border-b-neutral-300 bg-gradient-to-r from-[#57bce3] via-[#83d1da] to-[#cdd8d4]">
          <div className="text-white bg-[#00000033] rounded-lg p-2 text-lg font-bold max-w-[130px] md:max-w-[400px] truncate">
            User: <UserAccount />
          </div>
          <div className="flex gap-2">
            <Button linkTo="/todos/table" shadow>
              Table
            </Button>
            <CustomButton.Logout />
          </div>
        </div>
        <div className="flex-grow overflow-auto flex flex-col items-center py-8 bg-gradient-to-br from-[#fff] via-[#f0c9f2] to-[#9daef5]">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}
