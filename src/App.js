import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
// import Dashboard from "./ui/Dashboard";
// import DemoFile from "./ui/DemoFile";
// import HomePage from "./ui/HomePage";
// import Menu from "./ui/Menu";
// import Cart from "./features/cart/Cart";
// import OrderedBar from "./ui/OrderedBar";
// import OrderingPage from "./ui/OrderingPage";
// import MyOrders from "./ui/MyOrders";
// import MainPage from "./school/MainPage";
import { useState } from "react";

// import Login from "./school/Login";
import Cart from "./pizza/features/cart/Cart";
import Home from "./school/Home";
import Data from "./school/Data";
import Homepage from "./pizza/ui/Homepage";
// import Navbar from "./pizza/ui/Navbar";
import Menu from "./pizza/features/menu/Menu";
import UserDetails from "./pizza/features/user/UserDetails";
import OrderDetails from "./pizza/ui/OrderDetails";
import Navbar from "./pizza/ui/Navbar";
import Login from "./pizza/pages/Login";
import SignUp from "./pizza/pages/SignUp";
// import HomePage from "./school/Homepage";
export default function App() {
  const [role, setRole] = useState("");
  const [user, setUser] = useState("");
  return (
    <>
      {/* <Navbar></Navbar>
      <div className="mx-auto w-[800px]">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                </>
              }
            />
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route
              path="/order"
              element={<OrderingPage></OrderingPage>}
            ></Route>
            <Route path="/yourorders" element={<MyOrders></MyOrders>}></Route>
          </Routes>
          <OrderedBar></OrderedBar>
        </Router>
      </div> */}
      {/* <Routes>
        <Route path="/" element={<Home setRole={setRole} />}></Route>
        <Route
          path="/login"
          element={<Login role={role} setUser={setUser} />}
        ></Route>
        <Route path="/data" element={<Data role={role} user={user} />}></Route>
      </Routes> */}
      <Navbar></Navbar>
      <div className="w-[800px] mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<UserDetails />}></Route>
          <Route path="/order/new" element={<OrderDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </>
  );
}
