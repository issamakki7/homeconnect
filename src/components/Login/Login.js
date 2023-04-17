import React, { useEffect, useState } from "react";
import "./Login.css";
import validateLoginInfo from "./validateLoginInfo";
import axios from "axios";

function Login() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  axios.defaults.withCredentials = true;

  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateLoginInfo(loginValues));

    axios
      .post("http://localhost:5000/homeconnect/login", {
        username: loginValues.username,
        password: loginValues.password,
      })
      .then((response) => {
        if (response.status != 401) {
          const user = response.data;
          localStorage.setItem("currentUser", JSON.stringify(user));

          if (
            loginValues.username == "admin" &&
            loginValues.password == "admin"
          ) {
            window.location.href = "/homeconnect/admin";
          } else {
            window.location.href = "/homeconnect/profile";
          }
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/homeconnect/login").then((response) => {
      console.log(response);
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1 className="login-title">Login Page</h1>
            <div className="input-area">
              <input
                type="text"
                placeholder="Enter your username"
                value={loginValues.username}
                onChange={handleChange}
                name="username"
                className="name"
              />
            </div>

            <div className="input-area">
              <input
                type="password"
                placeholder="Enter your password"
                value={loginValues.password}
                onChange={handleChange}
                name="password"
                className="name"
              />
            </div>

            <div className="button-area">
              <a href="/homeconnect/profile">
                <button type="submit" className="loginpage-button">
                  Log In
                </button>{" "}
              </a>
            </div>

            <div className="loginerror-msg">
              <p>{errors.fields}</p>
              <p>{errors.password}</p>
            </div>

            <span className="signup-link">
              Don't have an account? Sign up <a href="/homeconnect/register">here</a>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
