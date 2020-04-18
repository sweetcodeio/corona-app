import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/Routes/route.js";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </React.Fragment>
  );
}
