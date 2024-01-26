import { IPrivateLayoutProps } from "@/interfaces/layouts";
import { PrivateRoute } from "@/routes";

export default function PrivateLayout({ children }: IPrivateLayoutProps) {
  return <PrivateRoute>{children}</PrivateRoute>;
}
