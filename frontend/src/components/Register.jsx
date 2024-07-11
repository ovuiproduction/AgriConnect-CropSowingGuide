import React, { useState } from "react";
import axios from "axios";
import { AlertSuccessRegister } from "./Alert";
import { useNavigate } from "react-router-dom";
import '../css/login.css';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupStatus, setSignupStatus] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username: username,
        password: password,
      });
      if (response.status == 200) {
        setSignupStatus(true);
        setTimeout(() => {
          navigate("/login");
        }, [2000]);
      } else if (response.status == 400) {
        alert("Not Register..");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
     <h1 className="login-header">Register</h1>
    <div className="login-maincontainer">
      {signupStatus && <AlertSuccessRegister />}
      <form>
        <div data-mdb-input-init class="form-outline mb-4">
          <input value={username} onChange={(e)=>setUsername(e.target.value)} type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
        </div>

        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          class="btn btn-primary btn-block mb-4"
          onClick={handleSignup}
        >
          Sign up
        </button>
      </form>
      </div>
    </>
  );
}
