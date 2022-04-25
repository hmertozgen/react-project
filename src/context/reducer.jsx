import { type } from "@testing-library/user-event/dist/type";

export const initialState = {
  todos: [
    {
      id: 0,
      context: "ben ilk todoyum",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };

    default:
      return { ...state };
  }
};

export default reducer;
