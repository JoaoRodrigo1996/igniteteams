import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useTheme } from "styled-components";

import { Container, Content, Icon, Input } from "./styles";

export function NewGroup() {
  const theme = useTheme();
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
