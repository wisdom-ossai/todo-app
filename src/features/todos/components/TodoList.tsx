// src/components/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { selectTodos } from "../todosSlice";
import TodoItem from "./TodoItem";
import NoTodo from "./NoTodo";

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos);

  console.log(todos);

  if (todos.length === 0) return <NoTodo />;

  return (
    <List
      height={400}
      itemCount={todos.length}
      itemSize={50}
      width="100%"
      className="list-container"
    >
      {({ index, style }) => {
        const todo = todos[index];
        return (
          <div style={style}>
            <TodoItem
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          </div>
        );
      }}
    </List>
  );
};

export default React.memo(TodoList);
