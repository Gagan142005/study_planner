"use client";

import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={submit} className="card">
      <input
        placeholder="New study task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
