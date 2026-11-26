import type { Metadata } from "next";
import LogInForm from "@/components/auth/LogInForm";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <LogInForm />
    </main>
  );
}