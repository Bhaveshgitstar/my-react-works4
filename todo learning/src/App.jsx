import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-cont">
        <Appname />
        <AddTodo />
        <div className="item-cont">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </div>
  );
}

export default App;
