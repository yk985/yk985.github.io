import React from "react";

export function Button({ children, variant = "solid", className = "", ...props }) {
  const baseClass = "button";
  const variantClass = variant === "outline" ? "outline" : "";
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
