import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar
} from 'react-native';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight: (
              <Button
                onPress={() => navigation.navigate('Modal')}
                title="Modal!"
                color="#fff"
              />
            ),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});


export default Home;