import { Platform } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Home from '../screens/Home';
import PendingToDos from '../screens/PendingToDos';
import CompletedToDos from '../screens/CompletedToDos';

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    ToDos: {
      screen: TabNavigator(
        {
          Pending: {
            screen: StackNavigator({
              Pending: { screen: PendingToDos },
            }),
          },
          Completed: {
            screen: StackNavigator({
              Completed: { screen: CompletedToDos },
            }),
          },
        },
        {
          tabBarComponent: Platform.OS === 'android' ? NavigationComponent : TabBarBottom,
          tabBarPosition: 'bottom',
          tabBarOptions: {
            bottomNavigationOptions: {
              labelColor: 'floralwhite',
              activeLabelColor: 'bisque',
              backgroundColor: 'lightseagreen',
            },
            inactiveTintColor: 'floralwhite',
            activeTintColor: 'bisque',
            indicatorStyle: {
              backgroundColor: 'bisque',
            },
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'lightseagreen',
            },
          },
        },
      ),
    },
  },
  {
    headerMode: 'none',
  },
);

export default MainNavigator;
