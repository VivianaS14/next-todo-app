"use client";
import React, { useContext } from "react";

export type TasksState = {
  id: string;
  title: string;
  description: string;
  status: boolean;
};

// Default state
const defaultState = [] as TasksState[];

// Context
const TaskContext = React.createContext(defaultState);

// Provider
const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const tasks: TasksState[] = defaultState;

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
