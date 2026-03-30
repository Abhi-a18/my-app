"use client";

import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@/app/lib/auth";
import { todos } from "@/app/lib/data";

export default function TodosPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    const filtered = todos.filter((t) => t.userId === user?.id);
    setData(filtered);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Todos</h1>

      {data.map((todo) => (
        <div key={todo.id} className="p-3 border mb-2 rounded">
          {todo.task}
        </div>
      ))}
    </div>
  );
}