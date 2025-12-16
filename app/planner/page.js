"use client";

import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../contexts/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Planner() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user) return;

    const loadTasks = async () => {
      const snapshot = await getDocs(
        collection(db, "users", user.uid, "tasks")
      );

      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };

    loadTasks();
  }, [user]);

  const addTask = async (task) => {
    const docRef = await addDoc(
      collection(db, "users", user.uid, "tasks"),
      task
    );

    setTasks((prev) => [
      ...prev,
      { id: docRef.id, ...task },
    ]);
  };

  if (!user) return <p>Please login first.</p>;

  return (
    <div className="container">
      <h2>📅 My Study Planner</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
