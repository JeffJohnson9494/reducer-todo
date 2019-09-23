export const todo = [
    //initial state shape
  {
    item: "Learning Reducers",
    completed: false,
    id: 1111111
  }
];

export const reducer = (state, action) => {
    //console logging state and action
  console.log("state", state, "action", action);
  switch (action.type) {
      //add todo case
    case "ADD_TODO":
       return [
           //unpacking state
        ...state,
        // setting item default complete false and action.payload and the id to date.now
        { item: action.payload, completed: false, id: Date.now() }
      ];
      //toggle completed case
    case "TOGGLE_COMPLETED":
        //mapping over state
      return state.map(todo => {
          //if todo.id is equal to action.payload im unpacking and returning !todo.completed which would change completed to true
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        //else im returning the todo in regular form
        return todo;
      });
      //clear completed case
    case "CLEAR_COMPLETED":
        //using state.filter to seperate !todo.completed(true) and todo.completed(false)
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};