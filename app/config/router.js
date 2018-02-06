import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import People from '../components/People';
import UserDetail from '../components/UserDetail';
import Settings from '../components/Settings';

const stackNavOptions = {
    headerStyle: {
        backgroundColor: '#4FA163',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
};

export const PeopleStack = StackNavigator(
    {
        People: {
            screen: People
        },
        Details: {
            screen: UserDetail
        }
    },
    {
    initialRouteName: 'People',
    navigationOptions: {
      ...stackNavOptions
    },
  }
);

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings
    }
}, 
{
    navigationOptions: {
      ...stackNavOptions
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
        screen: SettingsStack,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
        }
    }
});