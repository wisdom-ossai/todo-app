// src/components/TodoItem.tsx
import { useAppDispatch } from "@/hooks/useStore";
import React from "react";
import { deleteTodo, toggleTodo } from "../todosSlice";

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoItem: React.FC<TodoItemProps> = React.memo(
  ({ id, text, completed }) => {
    const dispatch = useAppDispatch();

    return (
      <li style={{ textDecoration: completed ? "line-through" : "none" }}>
        <span onClick={() => dispatch(toggleTodo(id))}>{text}</span>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </li>
    );
  }
);

export default TodoItem;
