import React from "react";
import Image from "next/image";
import Logo from "../../public/Assets/Svg/LogoFlens.svg";

export default function FlensLogo() {
  return (
    <Image
    src={Logo}
    alt="Flens Logo"
    width={144}
    height={32}
    
    
    />
    );
}