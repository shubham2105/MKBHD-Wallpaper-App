import { StyleSheet, Animated, View, Text } from 'react-native';
import React, { Component } from 'react';

class ImageLoader extends Component {
    state = {
        logoOpacity: new Animated.Value(0),
        textOpacity: new Animated.Value(0),
    };

    onLoad = () => {
        Animated.timing(this.state.logoOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            this.animateText();
        });
    };

    animateText = () => {
        Animated.timing(this.state.textOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(()=>{
            setTimeout(()=>{
                this.props.navigation.replace("SignUpScreen");
            }, 2000);
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image
                    onLoad={this.onLoad}
                    {...this.props}
                    style={[
                        {
                            opacity: this.state.logoOpacity,
                            transform: [
                                {
                                    scale: this.state.logoOpacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.85, 1],
                                    }),
                                },
                            ],
                        },
                        this.props.style,
                    ]}
                />
                <Animated.View style={{ opacity: this.state.textOpacity }}>
                    <Text style={styles.text}>MKBHD</Text>
                </Animated.View>
            </View>
        );
    }
}

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageLoader source={require('../../assets/logo.png')} style={styles.logo} navigation = {navigation}/>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 50,
        color: 'white',
        fontWeight: '200',
    },
});
