import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { HeaderStyled } from "@/styles/pages/app";

export function Header() {
  return (
    <HeaderStyled>
      <Image src={logoImg} width={130} height={52} alt="Ignite Shop logo" />
    </HeaderStyled>
  )
}