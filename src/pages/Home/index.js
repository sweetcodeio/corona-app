import React, { useState, useEffect } from "react";
//import { ScrollView, RefreshControl, Text } from "react-native";
import moment from "moment";
moment.locale("pt-BR");

import colors from "../../utils/Colors";
import api from "../../services/api";

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
  // GraphicContainer,
  // InformationItem,
  // InformationIcon,
} from "./styles";

export default function Home() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    async function loadBrazil() {
      const { data } = await api.get("brazil").then((r) => r.data);

      setStatus(data);
      console.log(data)
    }
    loadBrazil();
  });

  return (
    <Container>
      <Header>
        <HeaderText>COVID AGORA</HeaderText>
        <DateText>{moment(new Date()).format("DD/MM/YYYY")}</DateText>
      </Header>
      <Content>
        <InformationContainer>
          <HeaderText>COVID NO BRAZIL</HeaderText>
          <InformationCard>
            <InformationHeader>
              <InformationColor color={colors.green} />
              <InformationTitle>Confirmados</InformationTitle>
            </InformationHeader>
            <InformationNumber>10000</InformationNumber>
          </InformationCard>

          <InformationCard>
            <InformationHeader>
              <InformationColor color={colors.yellow} />
              <InformationTitle>Suspeitos</InformationTitle>
            </InformationHeader>
            <InformationNumber>15000</InformationNumber>
          </InformationCard>

          <InformationCard>
            <InformationHeader>
              <InformationColor color={colors.red} />
              <InformationTitle>Óbitos</InformationTitle>
            </InformationHeader>
            <InformationNumber>15000</InformationNumber>
          </InformationCard>

          <InformationCard>
            <InformationHeader>
              <InformationColor color={colors.lightBlue} />
              <InformationTitle>Curados</InformationTitle>
            </InformationHeader>
            <InformationNumber>15000</InformationNumber>
          </InformationCard>

          <InformationCard>
            <InformationHeader>
              <InformationColor color={colors.darkBlue} />
              <InformationTitle>Total</InformationTitle>
            </InformationHeader>
            <InformationNumber>15000</InformationNumber>
          </InformationCard>
        </InformationContainer>
      </Content>
    </Container>
  );
}
