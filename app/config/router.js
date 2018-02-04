import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../components/Home';
import UserDetail from '../components/UserDetail';
import Settings from '../components/Settings';

export const PeopleStack = StackNavigator({
    People: {
        screen: Home,
        navigationOptions: {
            title: 'People'
        }
    },
    Details: {
        screen: UserDetail,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        }),
    }
});

export default Tabs = TabNavigator({
    People: {
        screen: PeopleStack,
        navigationOptions: {
          tabBarLabel: 'People',
          tabBarIcon: ({ tintColor }) => <Icon name="people" size={35} color={tintColor} />
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
        },
    }
}); 