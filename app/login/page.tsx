import { Suspense } from "react";
import type { Metadata } from "next";
import LogInForm from "@/components/auth/LogInForm";
import RedirectIfSignedIn from "@/components/auth/RedirectIfSignedIn";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <Suspense fallback={null}>
        <RedirectIfSignedIn />
      </Suspense>
      <LogInForm />
    </main>
  );
}
