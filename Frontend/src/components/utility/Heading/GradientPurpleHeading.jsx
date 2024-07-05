import React from "react";

const GradientPurpleHeading = ({ children,size }) => {
  const sizeClasses = {
    bold: "text-[33px] font-bold leading-8",
    semiBold: "text-5xl font-semibold leading-[60px]",
  };
  return (
    <h1
      className={` font-inter text-center tracking-tighter  ${sizeClasses[size]}`}
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

export default GradientPurpleHeading;
