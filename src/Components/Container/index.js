import React from 'react';
import {
    View,
    Text,
} from 'react-native';

class Container extends React.Component {
    
    render() {
        return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text>Merhaba sevgili React Native'ciler</Text>
            </View>
        );
    }
    
}

export default Container;
