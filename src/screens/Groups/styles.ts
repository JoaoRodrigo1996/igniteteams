import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-size: ${(props) => props.theme.FONT_SIZE.XL};
  text-transform: uppercase;
  letter-spacing: 2px;
`;
