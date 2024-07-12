import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AlertSuccessLogin } from "./Alert";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      if (response.status == 200) {
        setloginStatus(true);
        setTimeout(() => {
          navigate("/farmertofarmer", { state: { username: username } });
        }, [1000]);
      } else if (response.status == 400) {
        alert("Invalid Password");
      } else if (response.status == 500) {
        alert("Invalid Username");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="login-header">Login</h1>
      <div className="login-maincontainer">
        {loginStatus && <AlertSuccessLogin />}
        <form>
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              id="form2Example1"
              class="form-control"
            />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="form2Example2"
              class="form-control"
            />
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
            onClick={handleLogin}
          >
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
