import React, { Component } from 'react';
import { View, Image, ImageBackground, Button, TouchableOpacity,Text } from 'react-native';


class saved extends Component {

    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Saved!</Text>
          </View>
        );
    }
}

export default saved
