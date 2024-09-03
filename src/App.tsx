import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Scanner from "./pages/Scanner";

export default function App() {
  return (
    <div className={"py-10 px-10 lg:px-20"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/scan"} element={<Scanner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
