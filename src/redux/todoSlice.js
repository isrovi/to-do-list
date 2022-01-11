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

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: ++nextTodoId,
        title: action.payload.title,
        description: "",
        status: 0,
        createdAt: Date.now(),
      };
      state.push(todo);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
