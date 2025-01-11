//import React from 'react'
import { FormEvent, useState } from "react";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCred, setWrongCred] = useState("");
  
  const homeNav = useNavigate();

  const goToHome = (e: FormEvent) => {
    e.preventDefault();
    console.log("login button pressed!!!!!!");
    console.log("username--->" + userName);
    console.log("password--->" + password);

    axios
      .get(
        "http://localhost:8080/uday-publications/book/user/check?uName=" +
          userName +
          "&password=" +
          password
      )
      .then((res) => {
        console.log("response--->" + res.data);
        if (res.data == true) {
          homeNav("/all");
        }
		else{
			setWrongCred("Credential are not correct!!!!");
		}
      });
  };

  const getUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                  className="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={goToHome}>

<div>
	{wrongCred}
</div>

                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    onChange={getUserName}
                    name=""
                    className="form-control input_user"
                    placeholder="username"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    onChange={getPassword}
                    className="form-control input_pass"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
