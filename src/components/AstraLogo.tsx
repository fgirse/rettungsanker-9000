import React from "react";
import Image from "next/image";
import Logo from "../../public/Assets/Svg/AstraLogo.svg";

export default function AstraLogo() {
  return (
    <Image
    src={Logo}
    alt="Astra Logo"
    width={144}
    height={32}
    
    
    />
    );
}