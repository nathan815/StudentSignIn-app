import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator, 
    Alert, 
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Navbar from './Navbar'

class Home extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        this.props.dispatch(Actions.loadUsers());
    }

    onRefresh() {
        this.props.dispatch(Actions.loadUsers());
        this.props.dispatch(Actions.usersRefreshing());
    }

    onClickUser(user) {
        this.props.navigation.navigate('Details', user);
    }
 
    render() {
        let content;
        if (this.props.loading) {
            content = this.renderLoading();
        }
        else {
            content = this.renderList();
        }

        return (
            <View style={styles.container}>
                {content}
            </View>
        );

    }

    renderLoading() {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator
                    animating={true}
                    color="steelblue"
                    size="large"
                    style={{marginBottom:20}}
                />
                <Text style={{textAlign:'center',color:'steelblue',fontSize:15}}>Loading people...</Text>
            </View>
        );
    }

    renderList() {
        return (
            <FlatList data={this.props.data} 
                      renderItem={({item}) => this.renderItem(item)} 
                      keyExtractor={(item, index) => index}
                      onRefresh={this.onRefresh.bind(this)}
                      refreshing={this.props.refreshing}
            />
        );
    }
 
    renderItem(item) {
        return (
            <TouchableOpacity onPress={() => this.onClickUser(item)}>
                <ListItem
                    roundAvatar
                    title={`${item.name.first} ${item.name.last}`}
                    subtitle={item.email}
                    avatar={{ uri: item.picture.thumbnail }}
                    containerStyle={{ borderBottomWidth: 0 }}
                />
            </TouchableOpacity>
        )
    }
};
 
const mapStateToProps = (state) => ({
    loading: state.userReducer.loading,
    refreshing: state.userReducer.refreshing,
    data: state.userReducer.data
});
 
export default connect(mapStateToProps)(Home);
 
var styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#F5F5F5'
    },
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});