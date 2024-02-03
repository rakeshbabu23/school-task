import React from "react";
import { studentList, teacherList, adminList } from "./SampleData";
import { useNavigate } from "react-router-dom";

const Data = ({ role, user }) => {
  const navigate = useNavigate();

  const getUserData = (role, user) => {
    switch (role) {
      case "Student":
        return studentList[user] || {};
      case "Teacher":
        return teacherList[user] || {};
      case "Admin":
        return adminList[user] || {};
      default:
        return {};
    }
  };

  const userData = getUserData(role, user);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  };

  const errorMessageStyle = {
    color: "red",
    fontSize: "16px",
  };

  const logoutButtonStyle = {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleLogout = () => {
    // Navigate to the "/" route upon logout
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{role} Details</h2>
      {Object.keys(userData).length > 0 ? (
        <>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={cellStyle}>Name</th>
                {role === "Student" && <th style={cellStyle}>Teachers</th>}
                {role === "Teacher" && <th style={cellStyle}>Students</th>}
                {role === "Admin" && (
                  <>
                    <th style={cellStyle}>Teachers</th>
                    <th style={cellStyle}>Students</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>{userData.Name}</td>
                {role === "Student" && (
                  <td style={cellStyle}>{userData.Teachers.join(", ")}</td>
                )}
                {role === "Teacher" && (
                  <td style={cellStyle}>{userData.Students.join(", ")}</td>
                )}
                {role === "Admin" && (
                  <>
                    <td style={cellStyle}>{userData.teachers.join(", ")}</td>
                    <td style={cellStyle}>{userData.students.join(", ")}</td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        </>
      ) : (
        <p style={errorMessageStyle}>User not found</p>
      )}
    </div>
  );
};

export default Data;
