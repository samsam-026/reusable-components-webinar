import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './src/Button';
import { Contact } from './src/Contact';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Click Me" color="blue" />
        <Button title="Click Me" color="green" />
        <Button title="Click Me" color="red" />
        <Contact title="Sameeha Rahman" description="Software Engineering Trainee" image={{ source: require("./assets/images/Sameeha.jpg") }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
