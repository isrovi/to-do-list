import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(
        addTodo({
          title: todo,
        })
      );
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo d-flex flex-row">
      <button type="submit" className="add-btn">
        +
      </button>
      <input
        type="text"
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a task"
      />
    </form>
  );
};

export default AddTodo;
