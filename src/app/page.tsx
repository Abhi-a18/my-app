"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserFromLocalStorage } from "./lib/auth";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (!user) {
      router.push("/login"); 
    }
  }, []);

  return (
    <div className="p-6">
      <h1>Home Page</h1>
    </div>
  );
}