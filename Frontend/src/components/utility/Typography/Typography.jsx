import React from "react";

const Typography = ({
  tag,
  size,
  weight,
  type,
  children,
  color = "#101828",
  lineNumbers,
}) => {
  const weightClasses = {
    regular: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
    semiBold: "font-semibold",
  };

  let Component = tag || "p";
  let sizeClasses;

  if (type === "display") {
    sizeClasses = {
      "2xl": "text-7xl",
      xl: "text-6xl",
      lg: "text-5xl",
      md: "text-4xl",
      sm: "text-3xl",
      xs: "text-2xl",
    };
    if (!tag) {
      const headingLevels = {
        "2xl": "h1",
        xl: "h2",
        lg: "h3",
        md: "h4",
        sm: "h5",
        xs: "h6",
      };
      Component = headingLevels[size] || "h2";
    }
  } else {
    sizeClasses = {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    };
  }

  const colorClass = `text-[${color}]`;
  let lineNum = lineNumbers ? lineNumbers : "none";
  return (
    <Component
      className={`font-inter line-clamp-${lineNum} ${colorClass} ${sizeClasses[size]} ${weightClasses[weight]}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
