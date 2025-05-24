
const App = () => {
  return (
    <center class='todo-container'>
      <h1>Todo App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button class="btn btn-success">Add</button>
          </div>
        </div>
      </div>


    </center>
  )
}

export default App