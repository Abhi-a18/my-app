"use client";

import { users } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUserFromLocalStorage } from "@/app/lib/auth";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function UsersPage() {
  const router = useRouter();

  const normalUsers = users.filter((u) => u.role === "user");

  useEffect(() => {
    const loggedInUser = getUserFromLocalStorage();

    if (!loggedInUser || loggedInUser.role !== "admin") {
      router.push("/login");
    }
  }, []);

  const handleViewDashboard = (user: User) => {
   
   localStorage.removeItem("impersonateUser");
  
   localStorage.setItem("impersonateUser", JSON.stringify(user));
  
   router.push("/user/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 flex justify-center text-orange-500">
        All Users
      </h1>

      {normalUsers.length === 0 && (
        <p className="text-center text-gray-500">No users found</p>
      )}

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
            View Dashboard
          </button>
        </div>
      ))}
    </div>
  );
}