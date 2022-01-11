import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, title, description, status, createdAt }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={`list-item d-flex flex-row ${status && "list-item-completed"}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          {status ? (
            <input type="checkbox" className="me-3" disabled checked></input>
          ) : (
            <input type="checkbox" className="me-3" disabled></input>
          )}
          {title}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
