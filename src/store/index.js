import { createStore } from "redux";

import * as lsHandler from "../tools/localStorage";

const INITIAL_STATE = lsHandler.loadState() || {
  todos: [
    "Do something 1",
    "Do something 2",
    "Do something 3",
    "Do something 4"
  ]
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.todo] };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.todo)
      };

    default:
      return state;
  }
};

const store = createStore(todos);

export default store;
