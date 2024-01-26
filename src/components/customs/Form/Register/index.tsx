import { Input } from "@/components/customs";
import { Button } from "@/components/bases";

import { AuthFrame } from "../Frame";

export default function RegisterForm() {
  return (
    <AuthFrame className="flex flex-col items-center gap-8">
      <h3>Create Account !</h3>
      <div className="w-full flex flex-col gap-4">
        <Input.TextField placeholder="Username" />
        <Input.TextField placeholder="Password" />
      </div>
      <Button>Login</Button>
    </AuthFrame>
  );
}
