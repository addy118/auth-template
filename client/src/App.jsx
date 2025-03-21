import React from "react";
import { useAuth } from "./authProvider";
import { useNavigate } from "react-router-dom";

export default function App() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      {isAuth ? navigate("/home") : <h2>Register on our app today itself!</h2>}
    </div>
  );
}
