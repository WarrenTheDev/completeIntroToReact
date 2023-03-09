import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams name="Luna" animal="dog" breed="Havanese" />
      <SearchParams name="Pepper" animal="bird" breed="Cockatiel" />
      <SearchParams name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
