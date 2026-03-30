"use client";

import { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          <Link
            href="/admin/user"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Users
          </Link>

          <Link
            href="/admin/transactions"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Transactions
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            document.cookie = "user=; Max-Age=0";
            document.cookie = "token=; Max-Age=0";
            window.location.href = "/login";
          }}
          className="mt-10 bg-red-500 w-full p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}