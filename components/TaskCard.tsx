import { Task } from "..";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const { id, description, title } = task;
  const router = useRouter();

  return (
    <div
      className="w-80 mx-auto p-4 bg-cyan-800 rounded-md"
      onClick={() => router.push(`/edit/${id}`)}
    >
      <div>
        <h1 className="text-lg">{title}</h1>
        <button className="bg-red-400 px-4">Delete</button>
      </div>
      <p>{description}</p>
    </div>
  );
}
