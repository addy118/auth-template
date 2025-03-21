import React from "react";
import AuthProvider, { useAuth } from "./authProvider";
import Routes from "./routes";

export default function App() {
  const { token } = useAuth();
  return (
    <>
      <div>welcome to our app!</div>
      {token ? <div>{token}</div> : <div>no token</div>}
    </>
  );
}
