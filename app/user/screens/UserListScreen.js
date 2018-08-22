import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator, 
    Alert, 
    StatusBar,
    TouchableOpacity,
    Button
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadUsers, usersRefreshing } from './../user-action';

class UserListScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'People',
            headerRight: (
              <Button
                onPress={() => navigation.navigate('Modal')}
                title="Modal!"
                color="#fff"
              />
            )
        }
    }
 
    componentDidMount() {
        this.props.dispatch(loadUsers());
    }

    onRefresh() {
        this.props.dispatch(loadUsers());
        this.props.dispatch(usersRefreshing());
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
                <StatusBar barStyle="light-content" />
                {content}
            </View>
        );

    }

    renderLoading() {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator
                    animating={true}
                    size="large"
                    style={{marginBottom:20}}
                />
                <Text style={{textAlign:'center',color:'#999',fontSize:15}}>Loading people...</Text>
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
 
export default connect(mapStateToProps)(UserListScreen);
 
const styles = StyleSheet.create({
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