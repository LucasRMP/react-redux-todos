import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import TodosList from "./components/TodosList";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <Provider store={store}>
        <TodosList />
        <AddForm />
      </Provider>
    </div>
  );
}

export default App;
