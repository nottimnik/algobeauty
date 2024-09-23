"use client";

import Link from "next/link";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

export default function Home() {
  const user = useUser((state) => state.user);

  return (
    <nav className="flex justify-between items-center">
      <Link href="/">AlgoBeauty</Link>
      {user?.id ? (
        <Profile />
      ) : (
        <>
          <Link href="/login">Log In</Link>
        </>
      )}
    </nav>
  );
}
