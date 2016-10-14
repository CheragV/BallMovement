/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PanResponder1 from './JsFiles/PanResponder1'
import PanResponder2 from './JsFiles/PanResponder2'
import PanResponder3 from './JsFiles/PanResponder3'
import PanResponder4 from './JsFiles/PanResponder4'

export default class BallMovement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PanResponder4/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BallMovement', () => BallMovement);
