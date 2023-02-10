import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ type = "PRIMARY", ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon type={type} name="home" />
    </Container>
  );
}
