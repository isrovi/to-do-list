import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="add-todo d-flex flex-row">
      <button className="add-btn">+</button>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
    </div>
  );
};

export default AddTodo;
