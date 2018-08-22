import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

class ClassListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Classes',
            headerRight: (
              <Button
                onPress={() => navigation.navigate('JoinClassModal')}
                title="Join"
                color="#fff"
              />
            )
        }
    }

    joinClass() {
        Alert.alert('Join class')
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.welcomeText}>Welcome, User!</Text>
                <Text style={styles.welcomeText}>You haven't joined any classes yet.</Text>
                <Button title="Join a Class" onPress={() => this.joinClass()} />
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    welcomeText: {
        fontSize: 16
    },
    search: {
        padding: 10,
        backgroundColor: '#f5f5f5'
    },
    center: {
        alignItems: 'center'
    }
});


export default ClassListScreen;