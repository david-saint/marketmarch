import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppStyles} from 'constants';
import Logo from '@assets/images/logo.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    shadowOffset: {width: 1, height: 10},
    shadowColor: AppStyles.colors.primaryColor,
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.imageHolder}>
      <Logo style={styles.logo} />
    </View>
  </View>
);
