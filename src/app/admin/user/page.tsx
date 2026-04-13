"use client";

import { users } from "@/app/lib/data";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();
  const normalUsers = users.filter((u) => u.role === "user");

  const handleViewDashboard = (user: any) => {
   
    localStorage.setItem("user", JSON.stringify(user));

    router.push("/user/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 flex justify-center text-orange-500">
        All Users
      </h1>

      {normalUsers.map((user) => (
        <div
          key={user.id}
          className="p-3 border mb-2 rounded-lg flex justify-between items-center"
        >
          <span>
            {user.name} ({user.role})
          </span>

          <button
            onClick={() => handleViewDashboard(user)}
            className="bg-green-500 rounded-lg text-white hover:bg-green-600 px-3 py-1"
          >
            Go to dashboard
          </button>
        </div>
      ))}
    </div>
  );
}