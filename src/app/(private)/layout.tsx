import { IPrivateLayoutProps } from "@/interfaces/layouts";
import { PrivateRoute } from "@/routes";

export default function PrivateLayout({ children }: IPrivateLayoutProps) {
  return (
    <PrivateRoute>
      <div className="min-h-screen flex flex-col items-center py-12 bg-gradient-to-br from-[#FFF] via-[#f0c9f2] to-[#9daef5]">
        {children}
      </div>
    </PrivateRoute>
  );
}
