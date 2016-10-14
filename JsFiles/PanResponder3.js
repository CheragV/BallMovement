'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactNative = require('react-native');
var PanResponder = ReactNative.PanResponder;
var StyleSheet = ReactNative.StyleSheet;
var View = ReactNative.View;
var Text = ReactNative.Text;
var Animated = ReactNative.Animated;
var processColor = ReactNative.processColor;


var CIRCLE_SIZE = 80;
var SPRING_CONFIG = { tension: 1, friction: 2 };

class PanResponderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(), // inits to zero
    };
    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x, // x,y are Animated.Value
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: () => {
        Animated.spring(
          this.state.pan,         // Auto-multiplexed
          { toValue: { x: 0, y: 0 } } // Back to zero
        ).start();
      },
    });
  }
  render() {
    return (
      <Animated.View
        {...this.state.panResponder.panHandlers}
        style={this.state.pan.getLayout() }>
        <View style={styles.circle}></View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'relative',
    backgroundColor: "red",
    left: 0,
    top: 0
  },
  container: {
    flex: 1,
    paddingTop: 0
  }
});

module.exports = PanResponderExample;