import React, {useEffect, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StoreContext} from 'store';
import * as screens from './screens';
import SplashScreen from 'screens/Splash';
import OnboardingScreen from 'screens/Onboarding';
import DefaultScreen from 'screens/Default';

const RootStack = createStackNavigator();

export default () => {
  const {appStore} = useContext(StoreContext);

  const renderScreens = () => {
    // if the app is still loading show the splash screen
    if (appStore.isLoading) {
      return (
        <RootStack.Screen name={screens.SPLASH} component={SplashScreen} />
      );
    }
    // if the app is done loading, but the user isn't boarded yet
    // show the onboarding screens.
    if (!appStore.hasBoarded()) {
      return (
        <RootStack.Screen
          name={screens.NEW_USER_ONBOARDING}
          component={OnboardingScreen}
        />
      );
    }
    // if theuser is onboarded and the app isn't loading
    return <RootStack.Screen name={'Test'} component={DefaultScreen} />;
  };

  useEffect(() => {
    setTimeout(() => {
      appStore.setLoading(false);
    }, 1500);
  }, [appStore]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      {renderScreens()}
    </RootStack.Navigator>
  );
};
