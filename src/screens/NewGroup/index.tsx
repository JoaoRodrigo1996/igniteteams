import { useState } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

import { createGroup } from "@storage/group/createGroup";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      await createGroup(group);
      navigation.navigate("players", { group });

      setGroup("");
    } catch (error) {
      console.log(error);
    }
  }

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
          value={group}
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
