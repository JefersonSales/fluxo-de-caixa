import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from '../../services/FirebaseConnection';

// import { Container } from './styles';

export default class addDespesa extends Component {
  static navigationOptions = {
    title: "Adicionar Despesa",
  }

  constructor(props) {
    super(props);
    this.state = {
      valor: ''
    };
    this.retirar = this.retirar.bind(this);
  }

  retirar() {
    if (this.state.valor != '' && this.state.valor > 0) {
      let historico = firebase.database().ref('historico').child(firebase.auth().currentUser.uid);
      let user = firebase.database().ref('users').child(firebase.auth().currentUser.uid);

      //Adicionar no Histórico
      let key = historico.push().key;

      historico.child(key).set({
        type: 'Despesa',
        valor: this.state.valor
      });

      user.once('value').then((snapshopt) => {
        let saldo = parseFloat(snapshopt.val().saldo);
        saldo -= parseFloat(this.state.valor);
        user.set({
          saldo: saldo
        });
        this.props.navigation.goBack();
      });

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Quanto você quer retirar?</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.valor}
          onChangeText={(valor) => this.setState({ valor })}
          autoFocus={true}
        />
        <Button title="Adicionar" onPress={this.retirar} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#DDDDDD',
  }
});
