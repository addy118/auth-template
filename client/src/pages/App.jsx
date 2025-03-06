import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-8xl font-bold">
      Hello World!
      <Outlet />
    </div>
  );
}

export default App;
