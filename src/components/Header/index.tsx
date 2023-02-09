import { Container, Logo } from "./styles";

import LogoImg from "@assets/logo.png";

interface HeaderProps {
  shownBackButton?: boolean;
}

export function Header({ shownBackButton }: HeaderProps) {
  return (
    <Container>
      <Logo source={LogoImg} />
    </Container>
  );
}
