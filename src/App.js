import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { useState } from "react";

import Login from "./school/Login";
import Home from "./school/Home";
import Data from "./school/Data";
import HomePage from "./school/Homepage";
export default function App() {
  const [role, setRole] = useState("");
  const [user, setUser] = useState("");
  return (
    <>

       <Routes>
        <Route path="/" element={<Home setRole={setRole} />}></Route>
        <Route
          path="/login"
          element={<Login role={role} setUser={setUser} />}
        ></Route>
        <Route path="/data" element={<Data role={role} user={user} />}></Route>
      </Routes>
     
    </>
  );
}
