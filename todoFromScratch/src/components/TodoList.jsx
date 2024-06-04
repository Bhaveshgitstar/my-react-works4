import { useContext } from "react";
import { Todolist } from "../store/todo-list-store";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const { todoList } = useContext(Todolist);

  return (
    <>
      {todoList.map((todo) => (
        <div key={todo.name} className="todo-input">
          <TodoItems todo={todo}></TodoItems>
        </div>
      ))}
    </>
  );
};

export default TodoList;
