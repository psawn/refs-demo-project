import { ChangeEvent, useRef, useState } from "react";
import { Modal } from "./Modal";

export function NewTask({ onAdd }: { onAdd: (task: string) => void }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef<{ open: () => void }>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return modal.current?.open();
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
          Add Task
        </button>
      </div>
    </>
  );
}
