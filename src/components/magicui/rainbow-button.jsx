import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import "./rainbow-button.css";

export function RainbowButton({ children, className = "", variant = "default", size = "default", ...props }) {
  // Use glassy pill style matching navbar/login
  return (
    <button
      className={`simple-rainbow-btn ${className} variant-${variant} size-${size}`}
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.13)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        color: "#fff",
        borderRadius: "2.5em",
        fontWeight: 400,
        fontSize: "1.08rem",
        display: "flex",
        alignItems: "center",
        gap: "0.6em",
        opacity: 0.92,
        cursor: "pointer",
        transition: "background 0.2s, border 0.2s, box-shadow 0.2s",
      }}
      {...props}
    >
      <div className="shimmer"></div>
      {children}
      <FiArrowRightCircle size={20} />
    </button>
  );
}

export function RainbowButtonDemo() {
  return <RainbowButton>Get Unlimited Access</RainbowButton>;
} 