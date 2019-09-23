import React, { useReducer } from "react";

import { reducer, todo } from "../reducers/reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
//todolist displays my todoform and my todo itself
const TodoList = () => {
  
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {/*mapping state into todo constant and then returning the todos*/}
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;