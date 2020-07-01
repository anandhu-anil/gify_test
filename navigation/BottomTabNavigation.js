import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkedScreen';
import TabBarIcon from '../components/BottomTabNavigator/TabBarIcon';
// import Colors from '../constants/Colors';

const stackNavigations = {
  header: null,
  headerTransparent: true,
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);
HomeStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'home-variant'} />
  ),
};

const BookmarkStack = createStackNavigator(
  {
    Home: BookmarkScreen,
  },
  {
    navigationOptions: {...stackNavigations},
  },
);

BookmarkStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'bookmark-outline'} />
  ),
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    BookmarkStack,
  },
  {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
      showLabel: false,
      style: {
        elevation: 24,
        // borderTopColor: Colors.boxShadowColor,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
      },
    },
  },
);

export default createAppContainer(BottomTabNavigator);
