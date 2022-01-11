import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <h1 style={{ color: "#f978a2" }}>to do list</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
