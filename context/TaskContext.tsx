"use client";
import React, { Dispatch, useContext, useEffect, useReducer } from "react";
import { Task, TaskAction, TasksState } from "..";

// Default state
let defaultState: TasksState = [];

if (typeof window !== "undefined") {
  const items = localStorage.getItem("tasks");
  if (items !== null) {
    defaultState = JSON.parse(items);
  }
}

// Context
const TaskContext = React.createContext(defaultState);

// Reducer -> Actions context
const TaskDispatchContext = React.createContext(
  (() => {}) as Dispatch<TaskAction>
);

// Provider
const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TaskReducers, defaultState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

// Hook for manage the context data
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTasks must used within a provider");

  return {
    tasks: context,
  };
};

// Reducer -> Actions
function TaskReducers(state: TasksState, { type, task }: TaskAction) {
  let existingTask = state.find((tsk) => tsk.id === task.id);

  switch (type) {
    case "add":
      if (existingTask === undefined) {
        return [...state, task];
      }
      return [...state].map((tsk) => (tsk.id === task.id ? { ...task } : tsk));

    case "remove":
      return [...state].filter((tsk) => tsk.id !== task.id);

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}

export const useTasksMutations = () => {
  const dispatch = useContext(TaskDispatchContext);

  const addToTasks = (task: Task) =>
    dispatch({
      task,
      type: "add",
    });

  const removeFromTask = (task: Task) =>
    dispatch({
      task,
      type: "remove",
    });

  return {
    addToTasks,
    removeFromTask,
  };
};

export default TaskProvider;
