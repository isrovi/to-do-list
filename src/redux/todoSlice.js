import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "to-do-list/getTodosAsync",
  async () => {
    const res = await fetch(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );
    if (res.ok) {
      const todos = await res.json();
      return { todos };
    }
  }
);

let nextTodoId = 6;

let today = new Date();
let date =
  today.getFullYear() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  today.getDate() +
  " " +
  today.getHours() +
  ":" +
  today.getMinutes();

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: ++nextTodoId,
        title: action.payload.title,
        description: "lorem ipsum",
        status: 0,
        createdAt: date,
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    markComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = 1;
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});

export const { addTodo, deleteTodo, markComplete } = todoSlice.actions;

export default todoSlice.reducer;
