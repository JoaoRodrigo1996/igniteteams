import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera do PUBG"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
