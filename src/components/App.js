import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { Home } from "../pages/Home/Home";
import { Catalog } from "../pages/Catalog/Catalog";
import { Favorites } from "../pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<Home/>}></Route>
        <Route path="/catalog" element={<Catalog/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
