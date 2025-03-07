import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="m-8 text-4xl font-bold">
      Welcome to our app!
      <Outlet />
    </div>
  );
}

export default App;
