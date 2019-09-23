import React from "react";

function Todo({ todo, dispatch }) {
  //togle completed function 
  const toggleCompleted = () => {
    //dispatch action
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

  
  return (
    //using true or false on completed to style it with or without a strike through it
      <div onClick={toggleCompleted}className={`todo${todo.completed ? "completed" : ""}`}style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        <p>{todo.item}</p>
      </div>
    
  );
}

export default Todo;