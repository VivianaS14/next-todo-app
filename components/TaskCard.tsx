import { useTasksMutations } from "@/context/TaskContext";
import { Task } from "..";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const { id, description, title } = task;
  const router = useRouter();
  const { removeFromTask } = useTasksMutations();

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // Create alert before delete
    removeFromTask(task);
  };

  return (
    <div
      className="w-80 mx-auto p-4 bg-cyan-800 rounded-md"
      onClick={() => router.push(`/edit/${id}`)}
    >
      <div className="flex justify-between">
        <h1 className="text-lg">{title}</h1>
        <button className="bg-red-400 px-4 rounded-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <p>{description}</p>
    </div>
  );
}
