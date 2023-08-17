"use client";
import React, { Dispatch, useContext, useReducer } from "react";
import { Task, TaskAction, TasksState } from "..";

// Default state
const defaultState = [
  {
    id: "101",
    title: "My Task 1",
    description: "Some description of task",
    status: false,
  },
  {
    id: "102",
    title: "My Task 2",
    description: "Some description of task",
    status: false,
  },
  {
    id: "103",
    title: "My Task 3",
    description: "Some description of task",
    status: false,
  },
] as TasksState;

// Context
const TaskContext = React.createContext(defaultState);

// Reducer -> Actions context
const TaskDispatchContext = React.createContext(
  (() => {}) as Dispatch<TaskAction>
);

// Provider
const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TaskReducers, defaultState);

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
  const existingTask = state.find((tsk) => tsk.id === task.id);

  switch (type) {
    case "add":
      if (existingTask === undefined) {
        return [...state, task];
      }
      return state;

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
