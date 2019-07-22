import React, { Component } from 'react';
import { View, Image, ImageBackground, Button, TouchableOpacity,Text } from 'react-native';


class notification extends Component {

    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notification!</Text>
          </View>
        );
    }
}
export default notification
