// src/components/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { selectTodos } from "../todosSlice";
import NoTodo from "./NoTodo";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos);

  if (todos.length === 0) return <NoTodo />;

  return (
    <List
      height={400}
      itemCount={todos.length}
      itemSize={50}
      width="100%"
      className="todo-wrapper"
      innerElementType=""
    >
      {({ index }) => {
        const todo = todos[index];
        return (
          <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
        );
      }}
    </List>
  );
};

export default React.memo(TodoList);
