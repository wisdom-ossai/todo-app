// src/components/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../todosSlice";
import NoTodo from "./NoTodo";
import TodoItem from "./TodoItem";
import { useAppSelector } from "@/hooks/useStore";

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos);
  const { searchTerm } = useAppSelector((state) => state.todos);

  if (todos.length === 0) return <NoTodo />;

  return (
    <div className="todo-list">
      {todos
        .filter((todo) =>
          todo.text.toLowerCase().includes(searchTerm?.toLowerCase() ?? "")
        )
        .map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
    </div>
  );
};

export default React.memo(TodoList);
