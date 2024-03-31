import { useRef } from "react";
import { Input } from "./Input";
import { ProjectData } from "../App";

export function NewProject({
  onAdd,
}: {
  onAdd: ({ title, description, dueDate }: ProjectData) => void;
}) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  function handleSave() {
    const enteredTitle = title.current!.value;
    const enteredDescription = description.current!.value;
    const enteredDueDate = dueDate.current!.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 px-6 py-2 rounded-md">
            Cancel
          </button>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title"></Input>
        <Input ref={description} label="Description" textarea></Input>
        <Input ref={dueDate} type="date" label="Due Date"></Input>
      </div>
    </div>
  );
}
