import { useContext, useRef } from "react";
import { Todolist } from "../store/todo-list-store";

const NewTodoItem = () => {
  const { addTodo } = useContext(Todolist);
  const todoItem = useRef();
  const todoDate = useRef();

  const handleOnAdd = (event) => {
    //  console.log(`${todoItem.current.value} ${todoDate.current.value} `);
    let addTodoItem = todoItem.current.value || "";
    let addTodoDate = todoDate.current.value || "";

    addTodo(addTodoItem, addTodoDate);

    addTodoDate = "";
    addTodoItem = "";
  };
  return (
    <div className="todo-input">
      <input
        className="todocontent"
        type="text"
        ref={todoItem}
        name="todo-items"
        placeholder="Todo "
      />
      <input
        className="todocontent"
        ref={todoDate}
        type="date"
        name="todo-date"
      />
      <button className="btn btn-primary addbutton" onClick={handleOnAdd}>
        Add
      </button>
    </div>
  );
};
export default NewTodoItem;
