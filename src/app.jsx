import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
