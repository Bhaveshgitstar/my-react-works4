function TodoItem2() {
  let name = "Go to College";
  let date = "01/10/2023";

  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-4">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button class="btn btn-danger todo-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
