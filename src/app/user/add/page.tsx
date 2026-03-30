"use client";

import { useState } from "react";

export default function AddTodo() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    alert(`Todo Added: ${task}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add Todo</h1>

      <input
        className="border p-2 mr-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}