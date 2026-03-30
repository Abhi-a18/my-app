"use client";

import { getUserFromLocalStorage } from "@/app/lib/auth";

export default function Dashboard() {
  const user = getUserFromLocalStorage();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome {user?.name}</h1>
    </div>
  );
}