import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type PlayerCardProps = {
  name: string;
  onRemovePlayer: () => void;
};

export function PlayerCard({ name, onRemovePlayer }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemovePlayer} />
    </Container>
  );
}
