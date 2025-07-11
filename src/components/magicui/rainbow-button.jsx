import React from "react";
import "./rainbow-button.css";

export function RainbowButton({ children, className = "", variant = "default", size = "default", ...props }) {
  // You can use variant and size to apply different styles if needed
  return (
    <button
      className={`simple-rainbow-btn ${className} variant-${variant} size-${size}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function RainbowButtonDemo() {
  return <RainbowButton>Get Unlimited Access</RainbowButton>;
} 