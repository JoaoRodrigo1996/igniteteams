import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import { NewGroup } from "@screens/NewGroup";

import { Loading } from "@components/Loading";
import theme from "@theme/index";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <NewGroup /> : <Loading />}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
