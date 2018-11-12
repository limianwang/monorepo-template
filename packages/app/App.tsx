import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonFunction from '@monorepo-template/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Limian</Text>
        <Text>{commonFunction('hello')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
