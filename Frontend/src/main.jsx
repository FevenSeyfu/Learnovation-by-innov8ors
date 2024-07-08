import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { CourseProvider } from "./Context/CourseContext.jsx";
import { DropdownProvider } from "./Context/DropdownContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <CourseProvider>
    <DropdownProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </DropdownProvider>
    </CourseProvider>
    
  </React.StrictMode>
);
