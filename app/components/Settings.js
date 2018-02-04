import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class Settings extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Settings</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    
});
 
export default connect(mapStateToProps)(Settings);