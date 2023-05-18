import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Map from "./components/MapOfMongolia";
import Header2 from "./components/Header2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savbar from "./components/Navbar";
import { createContext, useState } from "react";
import Notifications from "./components/Notification";
import {
  Cato,
  Home,
  Order,
  Owner,
  ProfileOrders,
  Signin,
  Signup,
  Admin,
  OwnerProfileOrders,
} from "./Pages/index1";
export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export const Toggle = createContext();

function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />}></Route>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/header1" element={<Header />}></Route>
          <Route path="/header2" element={<Header2 />}></Route>
          <Route path="/navbar" element={<Savbar />}></Route>
          <Route path="/cato" element={<Cato />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/profile" element={<ProfileOrders />}></Route>
          <Route path="/ownerprofile" element={<OwnerProfileOrders />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels/:id" element={<Order />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/owner" element={<Owner />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
