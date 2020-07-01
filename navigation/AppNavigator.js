import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import GifListingScreen from '../screens/GifListingScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import BottomTabNavigator from '../navigation/BottomTabNavigation';

const ScreenStack = createStackNavigator(
  {
    BottomTab: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
    GifListingScreen: {
      screen: GifListingScreen,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
    BookmarkedScreen: {
      screen: BookmarkedScreen,
      navigationOptions: {
        headerShown: false,
        headerTransparent: true,
      },
    },
  },
  {
    initialRouteName: 'BottomTab',
    headerMode: 'screen',
  },
);
export default createAppContainer(ScreenStack);
