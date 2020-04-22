import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ScrollView, TouchableOpacity, Text, Image } from "react-native";

import worldIcon from "../../assets/world.png";
import brFlag from "../../assets/BrFlag.png";

import {
  Container,
  Header,
  HeaderText,
  Content,
  MenuContainer,
  InterativeCard,
} from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function navigateTo(Home) {
    navigation.navigate("Brazil", { Home });
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderText>COVID AGORA</HeaderText>
        </Header>
        <Content>
          <MenuContainer>
            <Text>Escolha a opção desejada...</Text>
            <InterativeCard>
              <Image
                source={worldIcon}
                style={{ width: 80, height: 80, alignSelf: "center" }}
              />
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  flexDirection: "row",
                  margin: 2,
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Text
                  style={{
                    color: "#007af5",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  MUNDO
                </Text>
              </TouchableOpacity>
            </InterativeCard>
            <InterativeCard>
              <Image
                source={brFlag}
                style={{ width: 105, height: 80, alignSelf: "center" }}
              />
              <TouchableOpacity
                onPress={() => navigateTo(Home)}
                style={{
                  flexDirection: "row",
                  margin: 2,
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Text
                  style={{
                    color: "#58d12c",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  BRASIL
                </Text>
              </TouchableOpacity>
            </InterativeCard>
          </MenuContainer>
        </Content>
      </ScrollView>
    </Container>
  );
}
