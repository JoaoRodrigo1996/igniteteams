import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />
      <GroupCard title="Galera do PUBG" />
    </Container>
  );
}
