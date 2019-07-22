
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import homeScreen from '../screens/homeScreen';
import saved from '../screens/saved';
import notification from '../screens/notification';
import profile from '../screens/profile';
import searchResults from '../screens/searchResults';
import propertyResults from '../screens/propertyDetails';

import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileNavigator = createStackNavigator({
  Profile: {screen: profile}
});
const HomeNavigator = createStackNavigator({
  Home: {screen: homeScreen},
  searchResults: {screen: searchResults},
  propertyResults:{screen: propertyResults}

});
const NotificationNavigator = createStackNavigator({
  Notification: {screen: notification}
});
const SavedNavigator = createStackNavigator({
  Saved: {screen: saved}
});

const TabStack = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: "Home",
      tabBarIcon: <Icon name="home" size={24} />
    }
  },

  Saved: {
    screen: SavedNavigator,
    navigationOptions: {
      title: "Saved",
      tabBarIcon: <Icon name="bookmark" size={25} />
    }
  },

  Notification: {
    screen: NotificationNavigator,
    navigationOptions: {
      title: "Notification",
      tabBarIcon: <Icon name="bell" size={24} />
    }
  },

  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: <Icon name="user" size={24} />
    }
  },

},
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'darkgray',
      labelStyle: {
        fontSize: 10,
      },

    }
  }

);





const Container = createAppContainer(TabStack);

export default Container;
