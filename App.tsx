import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
