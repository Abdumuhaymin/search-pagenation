import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Pagenation } from "./pages/pagenation";
import { Search } from "./pages/search";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pagenation />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
