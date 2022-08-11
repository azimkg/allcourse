import React from "react";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";

function App() {
  return (
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  );
}

export default App;
