import { createStore } from "redux";

import * as lsHandler from "../tools/localStorage";

const INITIAL_STATE = lsHandler.loadState() || {
  todos: [
    {
      id: 1,
      text: "Do something 1"
    },
    {
      id: 2,
      text: "Do something 2"
    },
    {
      id: 3,
      text: "Do something 3"
    }
  ]
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: action.id, text: action.text }]
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return state;
  }
};

const store = createStore(todos);

export default store;
