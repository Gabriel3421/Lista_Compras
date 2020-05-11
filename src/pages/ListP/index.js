import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconx from 'react-native-vector-icons/FontAwesome';
import { Keyboard, ActivityIndicator } from 'react-native';
import {
  Container,
  Input,
  Form,
  SubmitButton,
  List,
  Linha,
  Produto,
  Quantidade,
  DeleteButton,
  QuantButton,
  QuantContainer,
  Footer,
  FooterButton,
  FooterText,
} from './style';

export default class App extends Component {
  state = {
    newProduct: '',
    productList: [],
  };

  handleAdd = () => {
    const { productList, newProduct } = this.state;
    this.setState({
      productList: [
        ...productList,
        {
          product: newProduct,
          amount: 1,
        },
      ],
      newProduct: '',
    });
  };

  handleDelete = (name) => {
    const { productList } = this.state;
    const newList = productList.filter((prod) => {
      return prod.product !== name;
    });
    this.setState({ productList: newList });
    console.tron.log(newList);
  };

  handleAddAmount = (product) => {
    const { productList } = this.state;
    const newList = productList.map((prod) => {
      if (prod.product === product.product) {
        return { product: prod.product, amount: prod.amount + 1 };
      }
      return { product: prod.product, amount: prod.amount };
    });
    this.setState({ productList: newList });
  };

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

    navigation.navigate('Lista de Produtos');
  };

  render() {
    const { newProduct, productList } = this.state;
    return (
      <Container>
        <Form>
          <Input
            placeholder="Add Produto"
            value={newProduct}
            onChangeText={(text) => this.setState({ newProduct: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAdd}
          />
          <SubmitButton onPress={this.handleAdd}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <List
          data={productList}
          keyExtractor={(prod) => prod.product}
          renderItem={({ item }) => (
            <Linha>
              <Produto>{item.product}</Produto>
              <QuantContainer>
                <QuantButton onPress={() => this.handleSubAmount(item)}>
                  <Icon name="remove" size={20} color="#fff" />
                </QuantButton>
                <Quantidade>{item.amount}</Quantidade>
                <QuantButton onPress={() => this.handleAddAmount(item)}>
                  <Icon name="add" size={20} color="#fff" />
                </QuantButton>
              </QuantContainer>
              <DeleteButton onPress={() => this.handleDelete(item.product)}>
                <Iconx name="remove" size={20} color="#fff" />
              </DeleteButton>
            </Linha>
          )}
        />

        <Footer>
          <FooterButton onPress={() => this.handleNavigation()}>
            <FooterText>Enviar</FooterText>
          </FooterButton>
        </Footer>
      </Container>
    );
  }
}
