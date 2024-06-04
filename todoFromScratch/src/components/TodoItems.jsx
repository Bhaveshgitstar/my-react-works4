import { useContext, useEffect, useRef, useState } from "react";
import { Todolist } from "../store/todo-list-store";
import { AiFillDelete } from "react-icons/ai";
import { IoSave } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const TodoItems = ({ todo }) => {
  const { deleteTodo } = useContext(Todolist);
  const [isEditing, setEditing] = useState(false);
  const [todoName, setTodoName] = useState(todo.name);
  const [todoDate, setTodoDate] = useState(todo.date);


  useEffect(()=>{
    fetch('https://dummyjson.com/todos')
  .then(res => res.json())
  .then(console.log);},[]);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          className="todo-item"
          name="todo-item"
          value={todoName}
          onChange={(e) => {
            setTodoName(e.value);
          }}
        />
        <input
          type="text"
          className="todo-item"
          name="date"
          value={todoDate}
          onChange={(e) => {
            setTodoDate(e.value);
          }}
        />
        <button
          className="btn btn-primary updatebutton"
          onClick={() => {
            setEditing(false);
          }}
        >
          <IoSave />
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span className="todo-item">{todo.name}</span>
        <span className="todo-item">{todo.date}</span>

        <button
          className="btn btn-success updatebutton "
          onClick={() => {
            setEditing(true);
          }}
        >
          <FaEdit />
        </button>
      </>
    );
  }

  return (
    <>
      {todoContent}
      <button
        className="btn btn-danger updatebutton "
        onClick={() => {
          deleteTodo(todo.name);
        }}
      >
        <AiFillDelete />
      </button>
    </>
  );
};

export default TodoItems;
