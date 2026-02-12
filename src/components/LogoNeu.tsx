import React from "react";
import Image from "next/image";
import Logo from "../../public/Assets/Svg/LogoNeu.svg";

export default function LogoNeu() {
  return (
    <Image
    src={Logo}
    alt="LogoNeu"
    width={144}
    height={32}
    
    
    />
    );
}