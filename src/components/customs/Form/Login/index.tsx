import { Input } from "@/components/customs";
import { Button } from "@/components/bases";

import { AuthFrame } from "../Frame";

export default function LoginForm() {
  return (
    <AuthFrame className="flex flex-col items-center gap-8">
      <h3>Todo List !</h3>
      <div className="w-full flex flex-col gap-4">
        <Input.TextField placeholder="Username" />
        <Input.TextField placeholder="Password" />
      </div>
      <Button>Login</Button>
    </AuthFrame>
  );
}
