import { ReactNode } from "react";
import Link from "next/link";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-60 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl mb-4">User Panel</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/user/dashboard">Dashboard</Link>
          <Link href="/user/todos">Todos</Link>
          <Link href="/user/add">Add Todo</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}