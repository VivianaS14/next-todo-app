"use client";
import { useTasks, useTasksMutations } from "@/context/TaskContext";
import { Task } from "@/index";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState, useEffect } from "react";

interface Props {
  paramId: string;
}

export default function NewPage({ paramId }: Props) {
  const [task, setTask] = useState<Task>({
    id: Math.floor(Math.random() * 100).toString(),
    title: "",
    description: "",
    status: false,
  });
  const { addToTasks } = useTasksMutations();
  const { tasks } = useTasks();
  const router = useRouter();

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (target.name === "title")
      setTask({
        ...task,
        title: target.value,
      });
    if (target.name === "description")
      setTask({
        ...task,
        description: target.value,
      });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToTasks(task);
    router.push("/");
  };

  useEffect(() => {
    if (paramId) {
      const taskFound = tasks.find((tsk) => tsk.id === paramId);
      if (taskFound) setTask(taskFound);
    }
  }, [paramId, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a title"
        className="text-black"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        cols={30}
        rows={10}
        className="text-black"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}
