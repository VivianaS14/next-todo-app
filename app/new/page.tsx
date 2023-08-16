"use client";
import { useTasks } from "@context/TaskContext";

export default function NewPage() {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <div>
      <h1>Task From</h1>
    </div>
  );
}
