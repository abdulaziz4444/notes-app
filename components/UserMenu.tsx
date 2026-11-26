"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  if (isPending) return null;

  if (!session) {
    return (
      <div className="flex gap-3 text-sm">
        <Link href="/login" className="underline">
          Log in
        </Link>
        <Link href="/sign-up" className="underline">
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Hi, {session.user.name}</span>
      <Button variant="outline" size="sm" onClick={handleSignOut}>
        Log out
      </Button>
    </div>
  );
}