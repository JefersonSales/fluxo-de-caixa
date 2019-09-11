import React, { Component } from 'react';

import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import firebase from '../../services/FirebaseConnection';
const img = require('../../../assets/fundo.orig.jpg');
const preload = require('../../../assets/728.gif');

// import { Container } from './styles';

export default class Index extends Component {
  static navigationOptions = {
    title: "Preload",
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {};

  }
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.transferir();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }

  transferir() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Interna');
      } else {
        this.props.navigation.navigate('Home');
      }
    })
  }

  render() {
    return (
      <ImageBackground source={img} style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.title}>Fluxo de Caixa v1.0</Text>
          <View>
            <Image
              source={preload}
              style={styles.preloadStyle}
            ></Image>
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
  preloadStyle: {

  }
});
