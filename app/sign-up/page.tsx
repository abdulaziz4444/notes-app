import type { Metadata } from "next";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <SignUpForm />
    </main>
  );
}