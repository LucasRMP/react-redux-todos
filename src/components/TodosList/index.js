import React, { useEffect } from "react";
import { connect } from "react-redux";

import { saveState } from "../../tools/localStorage";

const TodosList = ({ todoList, removeTodo, state }) => {
  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          {todo.text + "  "}
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todoList: state.todos,
  state
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch({ type: "REMOVE_TODO", id })
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
