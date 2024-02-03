import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function HomePage({ setRole }) {
  const navigate = useNavigate();
  function handleStudent() {
    setRole("student");
    navigate("/login");
  }
  function handleTeacher() {
    setRole("teacher");
    navigate("/login");
  }
  function handleAdmin() {
    setRole("admin");
    navigate("/login");
  }

  return (
    <>
      <Button onClick={handleStudent}>Student</Button>
      <Button onClick={handleTeacher}>Teacher</Button>
      <Button onClick={handleAdmin}>Admin</Button>
    </>
  );
}
