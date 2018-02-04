'use strict';
 
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator, Alert, StatusBar
} from 'react-native';
import { List, ListItem } from "react-native-elements";
 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
 
import * as Actions from '../actions'; //Import your actions

import Navbar from './Navbar'

class Home extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        this.props.getData(); //call our action
    }

    onRefresh() {
        this.props.getData(); 
        this.props.dispatch({type:'DATA_REFRESHING',refreshing:true});

        //Alert.alert('Refreshing')
    }
 
    render() {
        let content;
        if (this.props.loading) {
            content = (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={[{height: 80}]}
                        size="small"
                    />
                </View>
            );
        }
        else {
            content = (
                <View style={styles.container}>
                    <StatusBar
                         backgroundColor="skyblue"
                         barStyle="light-content"
                       />
                    <Navbar title="Instructions" style={{ backgroundColor: 'darkgreen' }} />
                    <FlatList data={this.props.data} 
                          renderItem={({item}) => this.renderItem(item)} 
                          keyExtractor={(item, index) => index}
                          onRefresh={this.onRefresh.bind(this)}
                          refreshing={this.props.refreshing}
                    />
                </View>
            );
        }
        return content;
    }
 
    renderItem(item) {
        return (
            <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
            />
        )
    }
};
 
const mapStateToProps = (state) => ({
    loading: state.dataReducer.loading,
    refreshing: state.dataReducer.refreshing,
    data: state.dataReducer.data
});
 
// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators(Actions, dispatch);
    return { ...actions, dispatch };
};
 
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
 
var styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    container: {
        flex:1, 
        backgroundColor: '#F5F5F5'
    },
    navbar: {
        backgroundColor: 'skyblue',
        height: 20
    },
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },
 
    title:{
        fontSize: 15,
        fontWeight: "600"
    },
 
    description:{
        marginTop: 5,
        fontSize: 14,
    }
});