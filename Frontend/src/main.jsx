import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { CourseProvider } from "./Context/CourseContext.jsx";
import { DropdownProvider } from "./Context/DropdownContext.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="67146946808-onjrnno58k5oag3e2sa62svl2h1r348v.apps.googleusercontent.com">
    <CourseProvider>
      <DropdownProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </DropdownProvider>
    </CourseProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
