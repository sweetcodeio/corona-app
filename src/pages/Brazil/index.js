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

export default function Brazil() {
  const [status, setStatus] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadBrazil() {
      const { data } = await api.get("brazil").then((r) => r.data);

      setStatus(data);
      setData([
        {
          key: 1,
          amount: data.confirmed,
          svg: { fill: colors.green },
        },
        {
          key: 2,
          amount: data.cases,
          svg: { fill: colors.yellow },
        },
        {
          key: 3,
          amount: data.deaths,
          svg: { fill: colors.red },
        },
        {
          key: 4,
          amount: data.recovered,
          svg: { fill: colors.lightBlue },
        },
      ]);
    }
    loadBrazil();
  }, []);

  if (!data.length) return <></>;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderText>COVID AGORA</HeaderText>
          <DateText>
            <Text>Hora Atual: </Text>
            {moment(Date.now())
              .locale("pt-br", localization)
              .format("HH:MM:SS")}
          </DateText>
        </Header>
        <Content>
          <GraphicContainer>
            <HeaderText>{status.country}</HeaderText>
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
                    color: "#3cc72a",
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  BUSCA POR ESTADO
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
