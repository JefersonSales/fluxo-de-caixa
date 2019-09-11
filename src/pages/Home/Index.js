import React, { Component } from 'react';

import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const img = require('../../../assets/fundo.orig.jpg');

// import { Container } from './styles';

export default class Index extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {},

      console.ignoredYellowBox = ['Setting a timer'];

    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
  }



  cadastrar() { this.props.navigation.navigate('Cadastro') }
  login() { this.props.navigation.navigate('Login') }

  render() {
    return (
      <ImageBackground source={img} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de Caixa v1.0</Text>
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={this.cadastrar}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: null
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  buttonArea: {
    marginTop: 30,
  },
  button: {
    marginTop: 30,
    height: 40,
    width: 200,
    backgroundColor: '#D4AC0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 20,
    color: '#fff'
  }
});
