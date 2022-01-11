import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <>
      <h6 className="mt-3 text-white">Tasks</h6>
      <ul className="list-group">
        {todos
          .filter((todo) => todo.status === 0)
          .map((todo) => (
            <TodoItem
              id={todo.id}
              title={todo.title}
              status={todo.status}
              description={todo.description}
              createdAt={todo.createdAt}
            />
          ))}
      </ul>
      <h6 className="mt-3 text-white">Completed</h6>
      <ul className="list-group">
        {todos
          .filter((todo) => todo.status === 1)
          .map((todo) => (
            <TodoItem
              id={todo.id}
              title={todo.title}
              status={todo.status}
              description={todo.description}
              createdAt={todo.createdAt}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
