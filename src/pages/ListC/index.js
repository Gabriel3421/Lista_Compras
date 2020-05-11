import React, { Component } from 'react';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  List,
  Linha,
  Produto,
  Quantidade,
  QuantButton,
  QuantContainer,
  Footer,
  FooterButton,
  FooterText,
} from './style';

export default class User extends Component {
  constructor(props) {
    super(props);
    const { route, navigation } = props;
    const { compras, originalPL } = route.params;
    this.state = {
      productList: [...compras],
      originalPL,
    };
  }

  handleNavigation = () => {
    const { navigation } = this.props;
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  render() {
    const { productList } = this.state;
    return (
      <Container>
        <List
          data={productList}
          keyExtractor={(prod) => prod.product}
          renderItem={({ item }) => {
            if (item.amount > 0) {
              return (
                <Linha>
                  <Produto>{item.product}</Produto>
                  <QuantContainer>
                    <Quantidade>{item.amount}</Quantidade>
                  </QuantContainer>
                </Linha>
              );
            }
          }}
        />

        <Footer>
          <FooterButton onPress={() => this.handleNavigation()}>
            <FooterText>Compras finalizadas</FooterText>
          </FooterButton>
        </Footer>
      </Container>
    );
  }
}
