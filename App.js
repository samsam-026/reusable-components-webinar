import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './src/Button';
import { Contact } from './src/Contact';
import { ExpandableListItem } from './src/ExpandableListItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Click Me" color="blue" />
        <Button title="Click Me" color="green" />
        <Button title="Click Me" color="red" />
        <Contact name="Sameeha Rahman" role="Software Engineering Trainee" image={{ source: require("./assets/images/Sameeha.jpg") }} />
        <Contact name="Devon Wijesinghe" role="Software Engineering Trainee" image={{ source: require("./assets/images/Devon.jpg") }} />
        <ExpandableListItem title="Heading" description="Description" />
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
