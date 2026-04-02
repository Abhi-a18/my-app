"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "@/app/lib/data";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [selectedRole, setSelectedRole] = useState<"user" | "admin">("user");

  const router = useRouter();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    if (selectedRole !== user.role) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    document.cookie = `user=${JSON.stringify(user)}`;

    if (user.role === "admin") {
      router.push("/admin/user");
    } else {
      router.push("/user/dashboard");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 ">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

        <div className="flex gap-4 justify-center mb-3">
          <button
            onClick={() => setSelectedRole("user")}
            className={`px-3 py-1 rounded ${
              selectedRole === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            User
          </button>

          <button
            onClick={() => setSelectedRole("admin")}
            className={`px-3 py-1 rounded ${
              selectedRole === "admin"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Admin
          </button>
        </div>

        <hr />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 mt-3 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}