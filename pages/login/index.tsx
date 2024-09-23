"use client";

import { createBrowserClient } from "@supabase/ssr";
import LoginForm from "@/components/nav/LoginForm";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const pathName = usePathname()


  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "auth/callback?next="+pathName,
      },
    });
  };

  return (
    <form>
      <LoginForm />
    </form>
  );
}
