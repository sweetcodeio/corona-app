import styled from "styled-components";

import colors from "../../utils/Colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 24px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 10px;
`;
export const HeaderText = styled.Text`
  color: ${colors.darkBlue};
  font-size: 20px;
  font-weight: 700;
`;
export const DateText = styled.Text`
  color: #3c4a6b;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
`;

export const Content = styled.View`
  width: 100%;
`;
export const GraphicContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const InformationContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const InformationHeader = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const InformationCard = styled.View`
  width: 47.5%;
  padding: 15px;
  border-width: 1.6px;
  border-color: #dae1e4;
  border-radius: 4px;
  margin-left: 2.5%;
  margin-top: 2.1%;
`;

export const InterativeCard = styled.View`
  width: 47.5%;
  padding: 16px;
  border-width: 1.6px;
  border-color: #dae1e4;
  border-radius: 4px;
  margin-left: 2.5%;
  margin-top: 3.5%;
`;

export const InformationColor = styled.View`
  width: ${(props) => (props.color ? 13 : 0)};
  height: ${(props) => (props.color ? 13 : 0)};
  border-radius: 2px;
  margin-right: ${(props) => (props.color ? 8 : 0)};
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;

export const InformationNumber = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  color: ${colors.darkBlue};
  font-weight: 700;
`;
export const InformationTitle = styled.Text`
  font-size: 15px;
  color: ${colors.gray};
  font-weight: 500;
`;

export const WorldMapContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7px;
`;
