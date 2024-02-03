import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Home = ({ setRole }) => {
  const navigate = useNavigate();

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "15px",
    margin: "10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleStudent = () => {
    setRole("Student");
    navigate("/login");
  };

  const handleTeacher = () => {
    setRole("Teacher");
    navigate("/login");
  };

  const handleAdmin = () => {
    setRole("Admin");
    navigate("/login");
  };

  return (
    <div style={buttonContainerStyle}>
      <Button style={buttonStyle} onClick={handleStudent}>
        Student
      </Button>
      <Button style={buttonStyle} onClick={handleTeacher}>
        Teacher
      </Button>
      <Button style={buttonStyle} onClick={handleAdmin}>
        Admin
      </Button>
    </div>
  );
};

export default Home;
