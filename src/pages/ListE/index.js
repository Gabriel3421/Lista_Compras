import React, { Component } from 'react';
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
    const { productList } = route.params;
    this.state = {
      productList,
      originalPL: productList,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { productList, originalPL } = this.state;
    this._unsubscribe = navigation.addListener('blur', () => {
      this.setState({ productList: originalPL });
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  handleSubAmount = (product) => {
    const { productList } = this.state;
    const newList = productList.map((prod) => {
      if (prod.product === product.product) {
        return { product: prod.product, amount: prod.amount - 1 };
      }
      return { product: prod.product, amount: prod.amount };
    });
    this.setState({ productList: newList });
  };

  handleNavigation = () => {
    const { navigation } = this.props;
    const { productList, originalPL } = this.state;
    const compras = productList.map((prod, indice) => {
      return {
        product: prod.product,
        amount: originalPL[indice].amount - prod.amount,
      };
    });
    console.tron.log(compras);
    navigation.navigate('Lista de Compras', { compras, originalPL });
  };

  render() {
    const { productList, originalPL } = this.state;

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
                    <QuantButton onPress={() => this.handleSubAmount(item)}>
                      <Icon name="remove" size={20} color="#fff" />
                    </QuantButton>
                  </QuantContainer>
                </Linha>
              );
            }
          }}
        />

        <Footer>
          <FooterButton onPress={() => this.handleNavigation()}>
            <FooterText>Gerar lista</FooterText>
          </FooterButton>
        </Footer>
      </Container>
    );
  }
}
