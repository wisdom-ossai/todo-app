import AddTodo from "@/features/todos/components/AddTodo";
import TodoList from "@/features/todos/components/TodoList";

function App() {
  return (
    <div className="app">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
