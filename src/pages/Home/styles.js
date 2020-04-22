import styled from "styled-components";

import colors from "../../utils/Colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 24px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding-top: 10px;
`;
export const HeaderText = styled.Text`
  color: ${colors.darkBlue};
  font-size: 40px;
  font-weight: 700;
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

export const MenuContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  #DescriptionText {
    font-weight: bold;
  }
`;

export const InterativeCard = styled.View`
  width: 47%;
  padding: 10px;
  margin-left: 2.5%;
  margin-top: 30%;
  border-width: 1.6px;
  border-color: #adacaa;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between;
`;
