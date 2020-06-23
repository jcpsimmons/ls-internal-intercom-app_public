import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "auth_change":
      // const { displayName = "", email = "" } = action.payload.user;
      return { ...state, user: action.payload.user };
    case "login":
      console.log("login");
      return { ...state, userAuthenticated: true };
    case "logout":
      console.log("logout");
      return { ...state, userAuthenticated: false };
    default:
      return;
  }
};

const initialState = {
  user: {},
  userName: "",
  userEmail: "",
  userAuthenticated: false,
};
const AuthContext = React.createContext(initialState);

function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
