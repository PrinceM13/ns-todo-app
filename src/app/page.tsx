import { Button } from "@/components/bases";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center md:flex-row gap-2">
        <h1>Welcome to</h1>
        <h1>Todo List App</h1>
      </div>

      <div className="flex gap-4">
        <Button variant="outlined" linkTo="/login" size="lg">
          Login
        </Button>
        <Button linkTo="/register" size="lg">
          Register
        </Button>
      </div>
    </main>
  );
}
