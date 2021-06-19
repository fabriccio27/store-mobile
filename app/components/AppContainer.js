import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from "../screens/WelcomeScreen";
import Register from "../screens/RegisterScreen";

export default createAppContainer (
  createStackNavigator({Welcome, Register}, {initialRouteName:"Welcome"})
);