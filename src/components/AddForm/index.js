import React, { useState } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

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
  createTodo: text =>
    dispatch({ type: "ADD_TODO", id: shortid.generate(), text })
});

export default connect(null, mapDispatchToProps)(AddForm);
