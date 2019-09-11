import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HistoricoItem from './HistoricoItem';
import firebase from '../../services/FirebaseConnection';

// import { Container } from './styles';

export default class Index extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      saldo: 0,
      historico: []
    };

    //Pegando e criando alterações no banco pelo usuário
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
          let state = this.state;
          state.saldo = snapshot.val().saldo;
          this.setState(state);
        });

        firebase.database().ref('historico').child(user.uid).on('value', (snapshot) => {
          let state = this.state;
          state.historico = [];
          snapshot.forEach((childItem) => {
            state.historico.push({
              key: childItem.key,
              type: childItem.val().type,
              valor: childItem.val().valor
            });
          });
          this.setState(state);
        });

      } else {
        this.props.navigation.navigate('Home');
      }
    });


    this.addDespesa = this.addDespesa.bind(this);
    this.addReceita = this.addReceita.bind(this);
    this.sair = this.sair.bind(this);
  }
  componentDidMount() { console.disableYellowBox = true; }

  addReceita() { this.props.navigation.navigate('AddReceita') }
  addDespesa() { this.props.navigation.navigate('AddDespesa') }
  sair() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.saldoArea}>
          <Text style={styles.saldo}>Saldo: R$ {this.state.saldo}</Text>
          <TouchableOpacity onPress={this.sair}>
            <MaterialIcons name="exit-to-app" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.historico}
          data={this.state.historico}
          renderItem={({ item }) => <HistoricoItem data={item} />}
        />
        <View style={styles.botoesAreas}>
          <Button title="+ Receita" onPress={this.addReceita} />
          <Button title="+ Despersa" onPress={this.addDespesa} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saldoArea: {
    paddingTop: 40,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
    backgroundColor: '#008080',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  saldo: {
    fontSize: 25,
    color: '#fff',
  },
  historico: {
    flex: 1
  },
  botoesAreas: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dddddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});
