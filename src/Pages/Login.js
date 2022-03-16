import React, { useState } from "react";
import { login } from "../services/login";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async (e) => {
    e.preventDefault();
    const responce = await login(email, password);
    if (responce) navigate("/allPosts");
  };
  const updatingEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatingPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={style.main}>
      <form action="#" method="post">
        <div>
          <h1>Login</h1>
        </div>

        <div className={style.inputDiv}>
          <input
            onChange={updatingEmail}
            type="email"
            value={email}
            id="inputUsername"
            name="email"
            placeholder="Email"
            required=""
          />
          <label htmlFor="inputUsername">Email</label>
        </div>

        <div className={style.inputDiv}>
          <input
            onChange={updatingPassword}
            type="password"
            value={password}
            id="inputPassword"
            name="password"
            placeholder="Password"
            required=""
            autoComplete="on"
          />
          <label htmlFor="inputPassword">Password</label>
        </div>

        <button onClick={signIn} type="submit" className={style.submitBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
