import "./styles.css";
import NavBar, { item } from "./Components/NavBar";
import { Outlet, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer"
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
}
