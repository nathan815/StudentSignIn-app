import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import People from '../screens/People';
import UserDetail from '../screens/UserDetail';
import Settings from '../screens/Settings';
import ModalScreen from '../screens/ModalScreen';

const stackNavOptions = {
    headerStyle: {
        backgroundColor: '#4FA163',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
};

export const HomeStack = StackNavigator({
    Home: {
        screen: Home
    }
}, 
{
    navigationOptions: {
      ...stackNavOptions
    }
});

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

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
        },
    },
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
            headerLeft: null,
            gesturesEnabled: false
        }
    }
},
{
    mode: 'modal'
});