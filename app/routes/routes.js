import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import PendingToDos from '../screens/PendingToDos';
import CompletedToDos from '../screens/CompletedToDos';

const MainNavigator = StackNavigator(
  {
    Home: { screen: Home },
    ToDos: {
      screen: TabNavigator({
        Pending: {
          screen: PendingToDos,
        },
        Completed: {
          screen: CompletedToDos,
        },
      }),
    },
  },
  {
    headerMode: 'none',
  },
);

export default MainNavigator;
