import { Task } from "../App";
import { NewTask } from "./NewTask";

export function Tasks({
  tasks,
  onAdd,
  onDelete,
}: {
  tasks: Array<Task> | undefined;
  onAdd: (task: string) => void;
  onDelete: (taskId: number) => void;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-400 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {!tasks!.length && (
        <p className="text-stone-800 my-4">This project does not have any tasks yet</p>
      )}
      {tasks!.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks!.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.task}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
