import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../constants/Theme';
import {Wander} from 'react-native-animated-spinkit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 250,
    backgroundColor: 'transparent',
  },
});

const Loading = ({color}) => (
  <View style={styles.container}>
    {color ? (
      <Wander size={60} color={color} />
    ) : (
      <Wander size={60} color={theme.COLORS.PRIMARY} />
    )}
  </View>
);

export default Loading;
