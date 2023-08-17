export type Task = {
  id: string;
  title: string;
  description: string;
  status: boolean;
};

export type TasksState = Task[];

export type TaskAction = {
  type: "add" | "remove";
  task: Task;
};
