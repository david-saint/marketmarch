import {createContext} from 'react';
// import {create} from 'mobx-persist';
// import AsyncStorage from '@react-native-community/async-storage';

import AuthStore from './authentication';
import ApplicationStore from './application';

// @ts-ignore
// const hydrate = create({
//   storage: AsyncStorage,
//   jsonify: true,
// });

const store = {
  appStore: new ApplicationStore(),
  authStore: new AuthStore(),
};

export const StoreContext = createContext(store);
export const StoreProvider = StoreContext.Provider;

export default store;
