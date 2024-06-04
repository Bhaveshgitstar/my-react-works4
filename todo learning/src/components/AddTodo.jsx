function AddTodo() {
  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button class="btn btn-success todo-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
