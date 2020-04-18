import React, { useState, useEffect } from "react";

import { PieChart } from "react-native-svg-charts";

import { ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../utils/Colors";

import api from "../../services/api";
import worldMap from "../../assets/worldmap.png";

import moment from "moment";
moment.locale("pt-BR");
import {
  Container,
  Header,
  HeaderText,
  DateText,
  Content,
  InformationContainer,
  InformationCard,
  InformationHeader,
  InformationTitle,
  InformationNumber,
  InformationColor,
  GraphicContainer,
  WorldMapContainer,
  // InformationItem,
  // InformationIcon,
} from "./styles";

export default function Home() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function loadBrazil() {
      const { data } = await api.get("brazil").then((r) => r.data);

      setStatus(data);
    }
    loadBrazil();
  });

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderText>COVID AGORA</HeaderText>
          <DateText>{moment(new Date()).format("DD/MM/YYYY")}</DateText>
        </Header>
        <Content>
          <GraphicContainer>
            <HeaderText>{status.country}</HeaderText>
            <PieChart
              style={{ height: 200, width: 200 }}
              valueAccessor={({ item }) => item.amount}
              data={[
                {
                  key: 1,
                  amount: status.confirmed,
                  svg: { fill: "#00000" },
                },
                {
                  key: 2,
                  amount: status.cases,
                  svg: { fill: "#00000" },
                },
                {
                  key: 3,
                  amount: status.deaths,
                  svg: { fill: "#00000" },
                },
                {
                  key: 4,
                  amount: status.recovered,
                  svg: { fill: "#00000" },
                },
              ]}
              spacing={0}
              outerRadius={"100%"}
            />
          </GraphicContainer>
          <InformationContainer>
            <InformationCard>
              <InformationHeader>
                <InformationColor color={colors.green} />
                <InformationTitle>Confirmados</InformationTitle>
              </InformationHeader>
              <InformationNumber>{status.confirmed}</InformationNumber>
            </InformationCard>

            <InformationCard>
              <InformationHeader>
                <InformationColor color={colors.yellow} />
                <InformationTitle>Suspeitos</InformationTitle>
              </InformationHeader>
              <InformationNumber>{status.cases}</InformationNumber>
            </InformationCard>

            <InformationCard>
              <InformationHeader>
                <InformationColor color={colors.red} />
                <InformationTitle>Óbitos</InformationTitle>
              </InformationHeader>
              <InformationNumber>{status.deaths}</InformationNumber>
            </InformationCard>

            <InformationCard>
              <InformationHeader>
                <InformationColor color={colors.lightBlue} />
                <InformationTitle>Curados</InformationTitle>
              </InformationHeader>
              <InformationNumber>{status.recovered}</InformationNumber>
            </InformationCard>

            <InformationCard>
              <InformationHeader>
                <InformationColor color={colors.darkBlue} />
                <InformationTitle>Total</InformationTitle>
              </InformationHeader>
              <InformationNumber>
                {status.confirmed +
                  status.cases +
                  status.deaths +
                  status.recovered}
              </InformationNumber>
            </InformationCard>
          </InformationContainer>
          <WorldMapContainer>
            <Image source={worldMap} style={{ height: 250, width: 250 }} />
          </WorldMapContainer>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              margin: 2,
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#3cc72a",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              BUSCAR POR ESTADO
            </Text>
            <Feather name="arrow-right" size={20} color="#00000" />
          </TouchableOpacity>
        </Content>
      </ScrollView>
    </Container>
  );
}
