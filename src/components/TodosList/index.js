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
        <li key={todo}>
          {todo + "  "}
          <button onClick={() => removeTodo(todo)}>X</button>
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
  removeTodo: todo => dispatch({ type: "REMOVE_TODO", todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
