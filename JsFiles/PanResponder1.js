'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactNative = require('react-native');
var PanResponder = ReactNative.PanResponder;
var StyleSheet = ReactNative.StyleSheet;
var View = ReactNative.View;
var processColor = ReactNative.processColor;


var CIRCLE_SIZE = 80;

var PanResponderExample = React.createClass({
  displayName: 'PanResponderExample',


  statics: {
    title: 'PanResponder Sample',
    description: 'Shows the use of PanResponder to provide basic gesture handling.'
  },

  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _circleStyles: {},
  circle: null,

  componentWillMount: function componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder, //Should start when we press
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd
    });
    this._previousLeft = -40;
    this._previousTop = 200;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'red'
      }
    };
  },

  componentDidMount: function componentDidMount() {
    this._updateNativeStyles();
  },

  render: function render() {
    var _this = this;

    return React.createElement(
      View,
      {
        style: styles.container },
      React.createElement(View, _extends({
        ref: function ref(circle) {
          _this.circle = circle;
        },
        style: styles.circle
      }, this._panResponder.panHandlers))
    );
  },

  _highlight: function _highlight() {
    this._circleStyles.style.backgroundColor = 'black';
    
    this._updateNativeStyles();
  },

  _unHighlight: function _unHighlight() {
    this._circleStyles.style.backgroundColor = 'red';
    this._updateNativeStyles();
  },

  _updateNativeStyles: function _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  },

  _handleStartShouldSetPanResponder: function _handleStartShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user presses down on the circle?
    return true;
  },

  _handleMoveShouldSetPanResponder: function _handleMoveShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user moves a touch over the circle?
    return true;
  },

  _handlePanResponderGrant: function _handlePanResponderGrant(e, gestureState) {
    this._highlight();
  },
  _handlePanResponderMove: function _handlePanResponderMove(e, gestureState) {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  },
  _handlePanResponderEnd: function _handlePanResponderEnd(e, gestureState) {
    
    this._circleStyles.style.left=this._previousLeft;
    this._circleStyles.style.top=this._previousTop;
    this._unHighlight();
    // this._previousLeft += gestureState.dx;
    // this._previousTop += gestureState.dy;
  }
}); 

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0
  },
  container: {
    flex: 1,
    paddingTop: 64
  }
});

module.exports = PanResponderExample;