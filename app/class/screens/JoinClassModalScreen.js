import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class JoinClassModalScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Join Class',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerRight: (
                <Button 
                    title="Close"
                    color="#fff"
                    onPress={ () => navigation.dispatch({ type: 'Navigation/BACK' }) }
                />
            )
        }
    };

  render() {
    return (
      <View>
        <Text>Join class...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    close: {
        color: 'white'
    }
});


export default JoinClassModalScreen;