
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

class PanResponderExample extends Component {

  constructor(props) {
    super(props);
    minWidth = 100;
    maxWidth = 200;
    change = 20;
    this.state = {
      w: 100,
      h: 100
    }
  }
  componentWillMount() {
    LayoutAnimation.spring();
  }
  onPress() {
    LayoutAnimation.configureNext();
    this.change = this.state.w == maxWidth ? -20 : (this.state.w == minWidth ? 20 : this.change);
    this.setState({ w: this.state.w + this.change, h: this.state.h + this.change })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { width: this.state.w, height: this.state.h }]}></View>
        <TouchableOpacity onPress={this.onPress.bind(this) }>
          <View style={styles.button}>
            <Text style={{ color: "#fff", paddingLeft: 5, fontStyle: "italic" }}> Press Me! </Text>
          </View>
        </TouchableOpacity>
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
  box: {
    backgroundColor: 'red',
    margin: 15,
  },
  button: {
    height: 30,
    width: 90,
    justifyContent: "center",
    backgroundColor: 'black',
  },
});


module.exports = PanResponderExample;