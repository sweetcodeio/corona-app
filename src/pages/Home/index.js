import React, { useState, useEffect } from "react";

import { PieChart } from "react-native-svg-charts";

import { ScrollView, Image, TouchableOpacity, Text, View } from "react-native";
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
          svg: { fill: "#000" },
        },
        {
          key: 2,
          amount: data.cases,
          svg: { fill: "#000" },
        },
        {
          key: 3,
          amount: data.deaths,
          svg: { fill: "#000" },
        },
        {
          key: 4,
          amount: data.recovered,
          svg: { fill: "#000" },
        },
      ]);
    }
    loadBrazil();
  }, []);

  if (!data.length) return <></>;
  console.log(data);

  return (
    <Container>
      <View>
        <PieChart
          style={{ height: 200, width: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={0}
          outerRadius={"100%"}
        />
      </View>
    </Container>
  );
}
