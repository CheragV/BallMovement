
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';


class PanResponderExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1),
        };
    }
    componentDidMount() {                   ///This is need when we want to show the animation at the beginning
        // this.state.bounceValue.setValue(1.2);    
        // Animated.spring(
        //     this.state.bounceValue, {
        //         toValue: 0.5,
        //         friction: 1
        //     }
        // ).start();
    }
    handlePress() {
        this.state.bounceValue.setValue(1.4);
        Animated.spring(
            this.state.bounceValue, {
                toValue: 1,
                friction: 1
            }
        ).start();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handlePress.bind(this) }>
                    <Animated.View
                        style={[styles.box, {
                            transform: [{
                                scale: this.state.bounceValue
                            }]
                        }]}>
                    </Animated.View>
                </TouchableWithoutFeedback>
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
        height: 100,
        width: 100,
        backgroundColor: 'red',
        margin: 15,
    },
});

module.exports = PanResponderExample;