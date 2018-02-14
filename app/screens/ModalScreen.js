import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  StatusBar
} from 'react-native';

class ModalScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Modal',
            headerLeft: null,
            headerRight: (
                <Button 
                    title='Close' 
                    onPress={ () => navigation.dispatch({ type: 'Navigation/BACK' }) }
                />
            ), 
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0 
            },
            tabBarIcon: ({ tintColor}) => {
                return <Icon name = "favorite" size={26} color={tintColor} />;
            } 
        }
    };

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <Text>Test modal!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});


export default ModalScreen;