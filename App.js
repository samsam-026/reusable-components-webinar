import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './src/Button';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Click Me" color="blue" />
        <Button title="Click Me" color="green" />
        <Button title="Click Me" color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
