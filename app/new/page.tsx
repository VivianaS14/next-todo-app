"use client";
import { useTasksMutations } from "@/context/TaskContext";
import { Task } from "@/index";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function NewPage() {
  const [task, setTask] = useState<Task>({
    id: Math.floor(Math.random() * 100).toString(),
    title: "",
    description: "",
    status: false,
  });
  const { addToTasks } = useTasksMutations();
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a title"
        className="text-black"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        cols={30}
        rows={10}
        className="text-black"
        onChange={handleChange}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}
