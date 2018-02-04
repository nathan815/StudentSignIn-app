import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;
        return (
            <View>
                <Image source={{uri: picture.large}} style={{width:"100%",height:250}} />
                <Text>{name.first+' '+name.last}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    
});
 
export default connect(mapStateToProps)(UserDetail);