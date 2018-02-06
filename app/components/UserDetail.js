import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.navigation.setParams({ 
            plusOne: this.plusOne.bind(this) 
        });
    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        const name = params.name;
        return {
            title: name.first + ' ' + name.last,
            headerRight: (
              <Button
                onPress={() => params.plusOne ? params.plusOne() : null}
                title="Add 1"
                color="#fff"
              />
            ),
        };
    };

    plusOne() {
        this.props.dispatch(Actions.addOne(this.props.navigation.state.params.email));
    }

    render() {
        const { picture, name, email, phone, login, dob, location, nat } = this.props.navigation.state.params;
        return (
            <View style={{flex:1,padding:20,alignItems:'center'}}>
                <Image source={{uri: picture.large}} style={{width:80,height:80}} />
                <Text style={{fontSize:17}}>{phone}</Text>
                <Text style={{fontSize:17}}>{email}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>{this.props.counter}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let params = ownProps.navigation.state.params || {};
    let user = state.userReducer.users[params.email] || {};
    return {
        counter: user.counter || 0
    }
};
 
export default connect(mapStateToProps)(UserDetail);