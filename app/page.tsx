"use client";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@context/TaskContext";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <main>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </main>
  );
}
