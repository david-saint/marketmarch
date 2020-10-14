import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {theme} from './theme';
import RootNavigator from 'navigators';
import store, {StoreProvider} from 'store';
import {NavigationContainer} from '@react-navigation/native';

export default () => {
  return (
    <StoreProvider value={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};
