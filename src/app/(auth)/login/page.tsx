import { Form } from "@/components/customs";
import { RedirectIfAuthenticated } from "@/routes";

export default function LoginPage() {
  return (
    <RedirectIfAuthenticated>
      <Form.Login />
    </RedirectIfAuthenticated>
  );
}
