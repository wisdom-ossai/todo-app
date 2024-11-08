import { useAppDispatch } from "@/hooks/useStore";
import React, { FormEvent } from "react";
import { addTodo } from "../todosSlice";

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      if ((values.todo as string).trim()) {
        dispatch(addTodo(values.todo as string));
        form.reset();
      }
    },
    [dispatch]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" placeholder="Add a new task" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default React.memo(AddTodo);
