import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, markComplete } from "../redux/todoSlice";

const TodoItem = ({ id, title, description, status, createdAt }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleComplete = () => {
    dispatch(markComplete({ id, status: 1 }));
  };

  return (
    <li
      className={`list-item d-flex flex-row justify-content-between py-2 px-3 ${
        status && "list-item-completed"
      }`}
    >
      <div className="d-flex flex-column">
        <span className="d-flex align-items-center">
          {status ? (
            <input type="checkbox" className="me-3" disabled checked></input>
          ) : (
            <input
              type="checkbox"
              className="me-3"
              onClick={handleComplete}
              checked=""
            ></input>
          )}
          {title}
        </span>
        <span className="date-text">{createdAt}</span>
      </div>
      <div>
        {description}
        <button onClick={handleDelete} className="ms-4 btn btn-danger">
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
