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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
