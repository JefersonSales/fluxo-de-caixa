import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HistoricoItem extends Component {
  constructor(props) {
    super(props);

    let bg = '#90ee90';
    if (this.props.data.type == 'Despesa') {
      bg = '#f08080';
    }
    this.state = {
      bg: bg
    };
  }

  render() {
    return (
      <View style={[styles.area, { backgroundColor: this.state.bg }]}>
        <Text style={styles.txt}>{this.props.data.type}</Text>
        <Text style={styles.txt}>R$ {this.props.data.valor} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.4,
  },
  txt: {
    fontSize: 20
  }
});