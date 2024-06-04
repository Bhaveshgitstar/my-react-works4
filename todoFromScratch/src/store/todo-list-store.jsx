import { createContext, useReducer } from "react";

export const Todolist = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
});

const INITIAL_TODO_LIST = [
  {
    name: "Wake Up",
    date: "22/12/2024",
  },
  {
    name: "Go to college",
    date: "22/12/2024",
  },
  {
    name: "Some React work to do",
    date: "22/12/2024",
  },
];

const todoListReducer = (currTodoList, action) => {
  let newTodoList = currTodoList;
  if (action.type === "DELETE_TODO") {
    newTodoList = currTodoList.filter(
      (todo) => todo.name !== action.payload.name
    );
  } else if (action.type === "ADD_TODO") {
    newTodoList = [action.payload, ...currTodoList];
  }
  return newTodoList;
};

const TodoListProvider = ({ children }) => {
  const [todoList, dispatchTodo] = useReducer(
    todoListReducer,
    []
  );

  const addTodo = (addTodoItem, addTodoDate) => {
    dispatchTodo({
      type: "ADD_TODO",
      payload: {
        name: addTodoItem,
        date: addTodoDate,
      },
    });
  };
  const editTodo = () => {};
  const deleteTodo = (todoName) => {
    dispatchTodo({
      type: "DELETE_TODO",
      payload: {
        name: todoName,
      },
    });
  };

  return (
    <Todolist.Provider value={{ todoList, addTodo, editTodo, deleteTodo }}>
      {children}
    </Todolist.Provider>
  );
};

export default TodoListProvider;
