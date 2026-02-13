import React from "react";
import AstraLogo from "../components/AstraLogo";
import FlensLogo from "../components/FlensLogo";
import LogoNeu from "../components/LogoNeu";
import Marquee from "react-fast-marquee";

const App = () => (
  <Marquee>
    <div className="relative top-[15vh] z-100 flex items-center gap-40">
    <AstraLogo />
    <FlensLogo />
    <LogoNeu />
    <AstraLogo />
    <FlensLogo />
    <LogoNeu />
    <AstraLogo />
    <FlensLogo />
    <LogoNeu />
    </div>
  </Marquee>
);

export default App;
