import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../services/FirebaseConnection';

// import { Container } from './styles';

export default class Index extends Component {
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: '#FFEE00',
    },
    headerTintColor: '#000'
  }

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      senhaInput: ''
    };
    this.entrar = this.entrar.bind(this);
    firebase.auth().signOut();
  }

  entrar() {
    if (this.state.emailInput != '' && this.state.senhaInput != '') {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.navigate('Interna');
        }
      });

      firebase.auth().signInWithEmailAndPassword(
        this.state.emailInput,
        this.state.senhaInput
      ).catch((error) => {
        alert(error.code);
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>E-mail</Text>
          <TextInput keyboardType="email-address" style={styles.input} onChangeText={(emailInput) => this.setState({ emailInput })} />
          <Text>Senha</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={(senhaInput) => this.setState({ senhaInput })} />
        </View>
        <View tyle={styles.containerButton}>
          <TouchableOpacity style={styles.buttonCadastro} onPress={this.entrar}>
            <Text style={styles.txtCadastrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 350,
    backgroundColor: '#F0F0F0',
    padding: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  buttonCadastro: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#007070',
    height: 40,
    width: 200,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000'
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtCadastrar: {
    color: '#FFF',
    fontSize: 18
  }
});
