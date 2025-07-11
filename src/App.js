import React from "react";
import "./Aurora.css";
import MainImg from "./assets/Main.png";
import LogoImg from "./assets/logo.png";
import { RainbowButtonDemo } from "./components/magicui/rainbow-button";
import Noise from "./components/Noise";

function Navbar() {
  // Define shared styles for button and pill
  const navItemStyle = {
    fontWeight: 400,
    fontSize: "1.05rem",
    padding: "0.6em 1.6em",
    height: "2.6em",
    display: "flex",
    alignItems: "center",
    fontFamily: "Figtree, Arial, Helvetica, sans-serif",
    boxSizing: "border-box",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 30,
        background: "transparent",
        padding: "2.5rem 0 0 0",
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <div
        style={{
          width: "100vw",
          maxWidth: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          padding: "0 2.5vw",
          pointerEvents: "auto",
          boxSizing: "border-box",
          overflow: "visible",
        }}
      >
        {/* Logo on far left */}
        <img
          src={LogoImg}
          alt="MagicAds logo"
          style={{
            height: "38px",
            width: "auto",
            display: "block",
            marginRight: "0.5em",
            flex: "0 0 auto",
            userSelect: "none",
          }}
        />
        {/* Center pill-shaped container (empty, glassmorphism) */}
        <div
          style={{
            ...navItemStyle,
            background: "rgba(255,255,255,0.07)", // very low opacity
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
            borderRadius: "2.5em",
            minWidth: 120,
            maxWidth: 520,
            width: "100%",
            margin: "0 auto",
            justifyContent: "center",
            pointerEvents: "auto",
            flex: "1 1 0%",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.13)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            opacity: 0.92, // keep it visible but very subtle
          }}
        >
          {/* Empty for now */}
        </div>
        {/* Login button on far right */}
        <button
          className="glass-btn"
          style={{
            ...navItemStyle,
            borderRadius: "2em",
            background: "rgba(255,255,255,0.7)",
            color: "#222",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.07)",
            margin: 0,
            pointerEvents: "auto",
            flex: "0 0 auto",
            minWidth: 0,
          }}
          onClick={() => {
            // Add your login action here
            console.log("Login clicked!");
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <div className="landing-bg">
        <div className="bg-semicircle" />
        <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
        <Navbar />
        {/* Main content column */}
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {/* Hero Section */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            width: "100vw",
            pointerEvents: "auto",
            marginTop: "5rem",
          }}>
            <div className="hero-headline">
              <div className="hero-script" style={{ fontSize: "clamp(4rem, 12vw, 4.5rem)", color: "#fff", textAlign: "center", marginBottom: "0.5rem" }}>
                Make Every Product Shine
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '1.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 0 }}>
                Create stunning ads from your product with AI, no design needed.
              </div>
            </div>
            <RainbowButtonDemo />
            <div className="hero-muted-small">No credit card required</div>
          </div>
          {/* Image Section BELOW hero/button */}
          <div style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}>
            <img
              src={MainImg}
              alt="Main visual"
              style={{
                width: "min(95vw, 1000px)",
                height: "auto",
                borderRadius: "2rem",
                boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
                objectFit: "contain",
                background: "#222",
                display: "block"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App; 