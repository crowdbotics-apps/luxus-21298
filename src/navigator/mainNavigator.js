import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item134345Navigator from '../features/Add-Item134345/navigator';
import Maps134341Navigator from '../features/Maps134341/navigator';
import UserProfile134337Navigator from '../features/UserProfile134337/navigator';
import Maps134296Navigator from '../features/Maps134296/navigator';
import Add-Item134295Navigator from '../features/Add-Item134295/navigator';
import Maps134291Navigator from '../features/Maps134291/navigator';
import UserProfile134287Navigator from '../features/UserProfile134287/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item134345: { screen: Add-Item134345Navigator },
Maps134341: { screen: Maps134341Navigator },
UserProfile134337: { screen: UserProfile134337Navigator },
Maps134296: { screen: Maps134296Navigator },
Add-Item134295: { screen: Add-Item134295Navigator },
Maps134291: { screen: Maps134291Navigator },
UserProfile134287: { screen: UserProfile134287Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
