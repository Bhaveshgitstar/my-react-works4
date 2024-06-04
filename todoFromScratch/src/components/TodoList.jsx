import { useContext, useEffect, useState } from "react";
import { Todolist } from "../store/todo-list-store";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const TodoList = () => {
  const { todoList } = useContext(Todolist);
  const [fetchTodoList,setFetchTodoList]=useState(todoList);
  const [isLoading,setIsLoading]=useState(true);


    useEffect(()=>{
      const fetchTodo = async () => {
        const res = await fetch('https://dummyjson.com/todos');
        const todo= await res.json();
        setFetchTodoList(todo.todos);
        setIsLoading(false);
      };
    
    fetchTodo();
    
  },[])

  return (
    <>
    {isLoading && <LoadingSpinner></LoadingSpinner>}
    {!isLoading && fetchTodoList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {fetchTodoList.map((todo) => (
        <div key={todo.id} className="todo-input">
          <TodoItems todo={todo}></TodoItems>
        </div>
      ))}
    </>
  );
};

export default TodoList;
