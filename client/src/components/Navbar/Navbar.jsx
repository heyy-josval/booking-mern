import { useState } from "react";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import { useLocation } from "wouter";

export default function Navbar() {
  const [location, setLocation] = useLocation();

  return (
    <div style={{ width: "100%" }}>
      <Topbar
        logo={<h2 style={{ cursor: "pointer" }}>RESERVAS JOSVAL</h2>}
        handleFirstButton={() => {
          setLocation("/register");
        }}
        handleSecondButton={() => {
          setLocation("/login");
        }}
        firstTextRight="Registrarme"
        secondTextRight="Ingresar"
      />
      <Bottombar direction="start" />
    </div>
  );
}
