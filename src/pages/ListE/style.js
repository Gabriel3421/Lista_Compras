import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding-top: 0px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const List = styled.FlatList.attrs({
  // showsVerticalScrollIndicator: false,
})``;
export const Linha = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 10px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const Produto = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: auto;
  width: 100px;
  max-width: auto;
`;

export const QuantContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
`;

export const Quantidade = styled.Text`
  font-size: 18px;
  line-height: 18px;
  color: #2c2c2c;
`;

export const QuantButton = styled.Text`
  justify-content: center;
  align-items: center;
  background: #7172f1;
  padding: 5px;
  border-radius: 4px;
`;

export const Footer = styled.View`
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const FooterButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7172f1;
  border-radius: 4px;
  padding: 0 12px;
  margin-top: 20px;
  margin-left: auto;
`;
export const FooterText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;
