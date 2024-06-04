import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoListProvider from "./store/todo-list-store";
import TodoList from "./components/TodoList";
import NewTodoItem from "./components/NewTodoItems";

function App() {
  return (
    <TodoListProvider>
      <center>
        <h3 className="app-heading">Todo App</h3>
        <NewTodoItem></NewTodoItem>
        <TodoList></TodoList>
      </center>
    </TodoListProvider>
  );
}
export default App;
