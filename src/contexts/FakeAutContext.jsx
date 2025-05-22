import { createContext, useContext, useReducer } from "react";

// 1) CREATE CONTEXT
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};
const FAKE_USER = {
  name: "moein",
  email: "moeinKazemi@gmail.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("the unknown action!!!");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  // 2) PROVIDE CONTEXT TO ALL COMPONENTS
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  // 3) CONSUM VALUE TO COMPONENTS
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(
      "The Value of FakeAutContext cant read outside of the provider"
    );
  return context;
}

export { AuthProvider, useAuth };
