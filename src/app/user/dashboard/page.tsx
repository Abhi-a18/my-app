"use client";

import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@/app/lib/auth";
import { useRouter } from "next/navigation";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  userId: string;
};

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [userTodos, setUserTodos] = useState<Todo[]>([]);
  const router = useRouter();

 const loadTodos = () => {
  const loggedInUser = getUserFromLocalStorage();

  let activeUser = loggedInUser;

  if (loggedInUser?.role === "admin") {
    const selectedUser = localStorage.getItem("selectedUser");

    if (selectedUser) {
      activeUser = JSON.parse(selectedUser);
    }
  }

  setUser(activeUser);

  if (!activeUser) return;

  const activeTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const completedTodos = JSON.parse(
    localStorage.getItem("completedTodos") || "[]"
  );

  const userActive = activeTodos.filter(
    (t: Todo) => t.userId === activeUser.id
  );

  const userCompleted = completedTodos.filter(
    (t: Todo) => t.userId === activeUser.id
  );

  setUserTodos([...userActive, ...userCompleted]);
};
  useEffect(() => {
    loadTodos();
    window.addEventListener("focus", loadTodos);
    return () => window.removeEventListener("focus", loadTodos);
  }, []);

  const completed = userTodos.filter((t) => t.completed).length;
  const pending = userTodos.length - completed;

  return (
    <div className="p-4 md:p-6 space-y-6">
      
      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h1 className="text-lg md:text-2xl font-bold">
          👋 Welcome, {user?.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
          <p className="text-sm">Total</p>
          <h2 className="text-xl md:text-2xl">{userTodos.length}</h2>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-lg shadow">
          <p className="text-sm">Completed</p>
          <h2 className="text-xl md:text-2xl">{completed}</h2>
        </div>

        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
          <p className="text-sm">Pending</p>
          <h2 className="text-xl md:text-2xl">{pending}</h2>
        </div>
      </div>

      <button
        onClick={() => router.push("/user/todos")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow w-full sm:w-auto"
      >
        Go to Todos
      </button>

      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-md md:text-lg mb-3 font-semibold">
          Recent Todos
        </h2>

        {userTodos.length === 0 && (
          <p className="text-gray-500 text-sm">
            No todos available
          </p>
        )}

        {userTodos.slice(0, 3).map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center border p-2 mb-2 rounded-lg"
          >
            <span className="break-words">{todo.task}</span>
            <span className="ml-2">
              {todo.completed ? "✅" : "⭕"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}