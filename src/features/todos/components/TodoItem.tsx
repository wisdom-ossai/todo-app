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
      <div
        // style={{ textDecoration: completed ? "line-through" : "none" }}
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "white",
          borderRadius: 8,
          paddingInline: ".5rem",
          paddingBlock: "1rem",
        }}
        className={completed ? "completed" : ""}
      >
        <div className="flex items-center gap">
          {completed && (
            <div className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
            </div>
          )}
          <p>{text}</p>
        </div>
        <div className="flex items-center justify-end action">
          <button
            onClick={() => dispatch(toggleTodo(id))}
            title={completed ? "Undo" : "Complete"}
          >
            {completed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 19v-2h7.1q1.575 0 2.738-1T18 13.5T16.838 11T14.1 10H7.8l2.6 2.6L9 14L4 9l5-5l1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575T20 13.5t-1.737 3.925T14.1 19z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"
                ></path>
                <path
                  fill="currentColor"
                  d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
                ></path>
              </svg>
            )}
          </button>
          <button onClick={() => dispatch(deleteTodo(id))} title="Delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
);

export default TodoItem;
