import React, { useState, useEffect } from "react";

import { PieChart } from "react-native-svg-charts";

import { ScrollView, Image, TouchableOpacity, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../utils/Colors";

import api from "../../services/api";
import worldMap from "../../assets/worldmap.png";

import moment from "moment";
import localization from "moment/locale/pt-br";
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
  InterativeCard,
} from "./styles";

export default function World() {
  const [status, setStatus] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadWorld() {
      const { data } = await api.get("countries").then((r) => r.data);

      setStatus({
        cases: data.reduce((a, b) => a + b.cases, 0),
        confirmed: data.reduce((a, b) => a + b.confirmed, 0),
        deaths: data.reduce((a, b) => a + b.deaths, 0),
        recovered: data.reduce((a, b) => a + b.recovered, 0),
        updated_at: data
          .map((c) => Date.parse(c.updated_at))
          .sort((a, b) => a - b)[0],
      });
      setData([
        {
          key: 1,
          amount: data.reduce((a, b) => a + b.confirmed, 0),
          svg: { fill: colors.green },
        },
        {
          key: 2,
          amount: data.reduce((a, b) => a + b.cases, 0),
          svg: { fill: colors.yellow },
        },
        {
          key: 3,
          amount: data.reduce((a, b) => a + b.deaths, 0),
          svg: { fill: colors.red },
        },
        {
          key: 4,
          amount: data.reduce((a, b) => a + b.recovered, 0),
          svg: { fill: colors.lightBlue },
        },
      ]);
    }
    loadWorld();
  }, []);

  if (!data.length) return <></>;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderText>COVID AGORA</HeaderText>
        </Header>
        <Content>
          <GraphicContainer>
            <HeaderText>MUNDO</HeaderText>
            <PieChart
              style={{ height: 200, width: 200 }}
              valueAccessor={({ item }) => item.amount}
              data={data}
              spacing={0}
              outerRadius={"100%"}
            />
          </GraphicContainer>
          <DateText>
            <Text>Última Atualização: </Text>
            {moment(status.updated_at)
              .locale("pt-br", localization)
              .format("LL")}
          </DateText>
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

            <InterativeCard>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  margin: 2,
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <Text
                  style={{
                    color: "#0f68f7",
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  BUSCA POR PÁIS
                </Text>
                <Feather name="arrow-right" size={20} color="#000" />
              </TouchableOpacity>
            </InterativeCard>
          </InformationContainer>
          <WorldMapContainer>
            <Image source={worldMap} style={{ height: 250, width: 250 }} />
          </WorldMapContainer>
        </Content>
      </ScrollView>
    </Container>
  );
}
