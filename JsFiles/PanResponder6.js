
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
    Easing,
} from 'react-native';


class PanResponderExample extends Component {

    constructor(props) {
        super(props);
        this.state={
            animatedValue:new Animated.Value(18),
        }
        // this.count=1.3;
    }
    componentDidMount() {
        // this.setState.animatedValue.setValue(1)
        // Animated.timing(this.state.animatedValue,{
        //     toValue:1.3,
        //     duration:500
        // }).start();
    }
    handlePress() {
        console.log("handlePress initiated :)")
        Animated.timing(this.state.animatedValue,{
            toValue:this.state.animatedValue._value *1.2,
            duration:500,
            easing: Easing.elastic(5),
        }).start();
        console.log(this.state.animatedValue)
    }
    render() {
        return (
            <Animated.View style={styles.container}>
                <TouchableOpacity onPress={this.handlePress.bind(this) }>
                        <Animated.Text style={{fontSize:this.state.animatedValue}}> HELLO </Animated.Text>            
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        margin: 15,
    },
});

module.exports = PanResponderExample;