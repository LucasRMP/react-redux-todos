import React, { useState } from "react";
import { connect } from "react-redux";

const AddForm = ({ createTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };

  return (
    <form>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handleSubmit}>ADD</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch({ type: "ADD_TODO", todo })
});

export default connect(null, mapDispatchToProps)(AddForm);
