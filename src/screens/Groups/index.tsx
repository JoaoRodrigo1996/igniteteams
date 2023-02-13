import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { getAllGroups } from "@storage/group/getAllGroups";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate("new");
  }

  async function fetchAllGroups() {
    try {
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
function UseCallback(): () => void | (() => void) | undefined {
  throw new Error("Function not implemented.");
}
