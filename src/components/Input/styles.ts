import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
  color: ${(props) => props.theme.COLORS.WHITE};

  border-radius: 6px;
  padding: 16px;
`;
