import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import ToDos from './screens/ToDos';

const MainNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  ToDos: {
    screen: ToDos,
  },
});

export default MainNavigator;
