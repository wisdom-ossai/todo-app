import AddTodo from "@/features/todos/components/AddTodo";
import TodoList from "@/features/todos/components/TodoList";
import SearchInput from "@/atoms/searchInput";
import { setSearchTerm } from "./features/todos/todosSlice";
import { useAppDispatch } from "./hooks/useStore";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="app">
      <div className="header">
        <h1 className="shrink-0">Todo List</h1>

        <SearchInput
          placeholder="Search task"
          containerClassName="max-w-300"
          onDebounceChange={(term) => dispatch(setSearchTerm(term))}
        />
      </div>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
