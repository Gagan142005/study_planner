"use client";

import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({ title, completed: false }); // add completed field
    setTitle("");
  };

  return (
    <form onSubmit={submit} className="card task-form p-4 mb-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Add Task</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
