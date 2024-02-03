import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const students = [{ username: "rakesh", password: "rakesh" }];
const teachers = [{ username: "t1", password: "t1" }];
const admins = [{ username: "admin", password: "admin" }];
const Login = ({ role, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "" || password === "") {
      setValidate(true);
    } else {
      setValidate(false);
      if (role === "Student") {
        for (const st of students) {
          if (st.username === username && st.password === password) {
            setUser(username);
            navigate("/data");
          }
        }
        setInvalid(true);
      } else if (role === "Teacher") {
        for (const t of teachers) {
          if (t.username === username && t.password === password) {
            setUser(username);
            navigate("/data");
          }
        }
        setInvalid(true);
      } else {
        for (const a of admins) {
          if (a.username === username && a.password === password) {
            setUser(username);
            navigate("/data");
          }
        }
        setInvalid(true);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #ccc",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h2>{role} login</h2>
        <form>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px",
              fontSize: "16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        {validate && (
          <div style={{ color: "red", marginTop: "10px" }}>
            Enter username or password
          </div>
        )}
        {invalid && (
          <div style={{ color: "red", marginTop: "10px" }}>
            Invalid {role} details
          </div>
        )}
        <div>{role}</div>
      </div>
    </div>
  );
};

export default Login;
