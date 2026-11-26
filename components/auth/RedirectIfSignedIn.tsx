import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function RedirectIfSignedIn() {
  const session = await getSession();
  if (session) redirect("/");
  return null;
}
