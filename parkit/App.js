/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RootApp from './RootApp';

//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/redux/Reducer';
import thunk from 'redux-thunk';
import {useState, useEffect} from 'react';

const store = createStore(rootReducer, applyMiddleware(thunk));

LogBox.ignoreLogs([
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`',
  'Setting a timer',
  "Can't perform a React state update on an unmounted component",
]);

export default function App() {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
