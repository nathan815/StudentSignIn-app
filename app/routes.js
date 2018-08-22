import React from 'react';
import { Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import UserListScreen from './user/screens/UserListScreen';
import ClassListScreen from './class/screens/ClassListScreen';
import JoinClassModalScreen from './class/screens/JoinClassModalScreen';

import Home from './screens/Home';
import People from './screens/People';
import UserDetail from './screens/UserDetail';
import Settings from './screens/Settings';
import ModalScreen from './screens/ModalScreen';

const headerNavOptions = {
    headerStyle: {
        backgroundColor: '#4FA163',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
};

const modalNavOptions = {
    headerLeft: null,
    gesturesEnabled: false
};

export const ClassStack = StackNavigator({
    Class: {
        screen: ClassListScreen
    }
}, 
{
    navigationOptions: {
      ...headerNavOptions
    }
});

export const PeopleStack = StackNavigator(
    {
        People: {
            screen: UserListScreen
        },
        Details: {
            screen: UserDetail
        }
    },
    {
    initialRouteName: 'People',
    navigationOptions: {
      ...headerNavOptions
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
      ...headerNavOptions
    }
});

export const Tabs = TabNavigator({
    Class: {
        screen: ClassStack,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
        },
    },
    People: {
        screen: PeopleStack,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="people" size={35} color={tintColor} />
        },
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
        }
    }
});

export default RootStack = StackNavigator({
    Main: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    Modal: {
        screen: ModalScreen,
        navigationOptions: {
            ...modalNavOptions,
            ...headerNavOptions
        }
    },
    JoinClassModal: {
        screen: JoinClassModalScreen,
        navigationOptions: {
            ...modalNavOptions,
            ...headerNavOptions
        }
    }
},
{
    mode: 'modal'
});