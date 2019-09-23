import React, { useState} from "react";


const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  
  //input function
  const handleChanges = e => {
    setItem(e.target.value);
  };
  //submit function
  const addTodo = e => {
    e.preventDefault();
    //dispatch action
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };
//clear completed function
  const clearCompleted = e => {
    e.preventDefault();
    //dispatch action
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label  hidden>
          Todo
        </label>
        <input name="todo" onChange={handleChanges} value={item} />
        <button>Add a Todo</button>
        <button onClick={clearCompleted}>Clear Finished Todos</button>
      </form>
    </div>
  );
};

export default TodoForm;