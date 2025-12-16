"use client";

import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED", title); // 👈 ADD THIS

    if (!title.trim()) return;

    addTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={submit} className="card task-form">
      <h3>Add Task</h3>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />

      <button type="submit">Add</button>
    </form>
  );
}
