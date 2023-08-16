"use client";
import React, { useContext } from "react";
import { TasksState } from "..";

// Default state
const defaultState = [
  {
    id: "101",
    title: "My First Task",
    description: "Some task description",
    status: false,
  },
  {
    id: "102",
    title: "My Second Task",
    description: "Some task description",
    status: false,
  },
  {
    id: "103",
    title: "My Third Task",
    description: "Some task description",
    status: false,
  },
] as TasksState;

// Context
const TaskContext = React.createContext(defaultState);

// Provider
const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const tasks: TasksState = defaultState;

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};

// Hook for manage the context data
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTasks must used within a provider");

  return {
    tasks: context,
  };
};

export default TaskProvider;
