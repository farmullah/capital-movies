import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../componets/SignInForm";
import SignUpForm from "../componets/SignUpForm";
import { MoviesContext } from "../context/MoviesContext";
import "../styles/login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { login, getUserDetails } = useContext(MoviesContext);

  useEffect(() => {
    if (getUserDetails()) {
      return navigate("/discover");
    }
  }, []);

  return (
    <div className="login form__container flex flex-center align-center">
      {isLogin ? (
        <SignInForm setIsLogin={setIsLogin} />
      ) : (
        <SignUpForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default Login;
