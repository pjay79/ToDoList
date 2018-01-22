import { StackNavigator, TabNavigator } from 'react-navigation';

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
          tabBarOptions: {
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
