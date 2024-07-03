import React from "react";

const Heading = ({ children }) => {
  return (
    <h1
      className="font-inter font-semibold text-4xl leading-[60px] text-center tracking-tighter"
      style={{
        background:
          "linear-gradient(90deg, #5663D9 0%, #AD72C2 56.57%, #C68CAD 99.99%, #FFB58A 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
