'use strict';
 
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator, Alert
} from 'react-native';

export default class Navbar extends Component {
    render() {
        return (
            <View style={[ styles.navbar, this.props.style ]}>
                <Text style={styles.navbarText}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        paddingTop: 25
    },
    navbarText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});