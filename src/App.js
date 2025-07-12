import React, { useState, useEffect } from "react";
import "./Aurora.css";
import MainImg from "./assets/Main.png";
import LogoImg from "./assets/logo.png";
import { RainbowButtonDemo } from "./components/magicui/rainbow-button";
import Noise from "./components/Noise";
import BlurText from "./components/BlurText";
import ScrollReveal from "./components/ScrollReveal";
import { AiFillHome } from "react-icons/ai";
import { MdAutoAwesome } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

function Navbar() {
  const [active, setActive] = useState("home");
  const [compressed, setCompressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompressed(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={compressed ? "navbar-compressed" : ""}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        background: "transparent",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 30,
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
          marginTop: compressed ? 16 : 32,
          transition: "margin-top 0.35s cubic-bezier(.4,1.2,.4,1)",
        }}
      >
        {/* Logo on far left */}
        <div style={{ minWidth: compressed ? 48 : 70, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <img
            src={LogoImg}
            alt="MagicAds logo"
            style={{
              height: compressed ? "36px" : "50px",
              width: "auto",
              display: "block",
              marginRight: "0.5em",
              flex: "0 0 auto",
              userSelect: "none",
              transition: "height 0.35s cubic-bezier(.4,1.2,.4,1)",
            }}
          />
        </div>
        {/* Center pill-shaped container (now with links) */}
        <div
          style={{
            ...navItemStyle,
            background: "rgba(255,255,255,0.07)",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
            borderRadius: "2.5em",
            minWidth: 120,
            maxWidth: compressed ? 220 : 560,
            margin: "0 auto",
            justifyContent: "center",
            pointerEvents: "auto",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.13)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            opacity: 0.92,
            gap: compressed ? "0.1em" : "0.5em",
            paddingLeft: compressed ? "0.5em" : "1.2em",
            paddingRight: compressed ? "0.5em" : "1.2em",
            transition: "max-width 0.35s cubic-bezier(.4,1.2,.4,1), width 0.35s cubic-bezier(.4,1.2,.4,1), gap 0.35s, padding 0.35s",
          }}
        >
          <a href="#" className={`nav-link${active === "home" ? " active" : ""} ${compressed ? "icon-only" : ""}`} onClick={() => setActive("home")}><AiFillHome size={20}/>{!compressed && "Home"}</a>
          <a href="#features" className={`nav-link${active === "features" ? " active" : ""} ${compressed ? "icon-only" : ""}`} onClick={() => setActive("features") }><MdAutoAwesome size={20}/>{!compressed && "Features"}</a>
          <a href="#pricing" className={`nav-link${active === "pricing" ? " active" : ""} ${compressed ? "icon-only" : ""}`} onClick={() => setActive("pricing") }><FaRegMoneyBillAlt size={18}/>{!compressed && "Pricing"}</a>
          <a href="#contact" className={`nav-link${active === "contact" ? " active" : ""} ${compressed ? "icon-only" : ""}`} onClick={() => setActive("contact") }><IoMailOutline size={19}/>{!compressed && "Contact"}</a>
        </div>
        {/* Login button on far right */}
        <div style={{ minWidth: compressed ? 48 : 70, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            style={{
              ...navItemStyle,
              borderRadius: "2.5em",
              background: "rgba(255,255,255,0.07)",
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "#fff",
              fontWeight: 400,
              fontSize: "1.08rem",
              display: "flex",
              alignItems: "center",
              gap: compressed ? "0" : "0.6em",
              pointerEvents: "auto",
              flex: "0 0 auto",
              minWidth: 0,
              margin: 0,
              opacity: 0.92,
              cursor: "pointer",
              transition: "background 0.2s, border 0.2s, box-shadow 0.2s, gap 0.35s, padding 0.35s, width 0.35s",
              paddingLeft: compressed ? "0.9em" : "1.6em",
              paddingRight: compressed ? "0.9em" : "1.6em",
            }}
            onClick={() => {
              // Add your login action here
              console.log("Login clicked!");
            }}
          >
            <FiLogIn size={20} />
            {!compressed && "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  // Use the same compressed logic as Navbar
  const [compressed, setCompressed] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setCompressed(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="landing-bg">
        <div className="grid-bg" />
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
            overflowY: "auto",
            paddingTop: compressed ? 48 : 70,
            transition: "padding-top 0.35s cubic-bezier(.4,1.2,.4,1)",
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
            marginTop: "2.5rem",
          }}>
            <div className="hero-headline" style={{ textAlign: "center" }}>
              <div className="hero-figtree-bold" style={{ fontSize: "clamp(4rem, 12vw, 4.5rem)", color: "#fff", marginBottom: 0, lineHeight: 1, padding: 0, display: 'block' }}>
                <BlurText
                  text="Make Every Product"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="inline"
                  display="block"
                />
              </div>
              <div style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: "#3ecbff", marginTop: 0, marginBottom: '0.4em', fontFamily: "'Dancing Script', cursive", lineHeight: 1, padding: 0, display: 'block' }}>
                <BlurText
                  text="Shine"
                  delay={450}
                  animateBy="words"
                  direction="top"
                  spanClassName="shine-gradient-animated"
                  display="block"
                />
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
            <div className="glass-card">
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
      </div>
    </>
  );
}

export default App; 