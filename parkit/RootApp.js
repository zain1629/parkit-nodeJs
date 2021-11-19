import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

//redux
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as actions from './src/redux/Actions.js';

import AuthStackScreens from './src/screens/authStack/AuthStack';
import {createStackNavigator} from '@react-navigation/stack';

// const FirstStack = createStackNavigator();
const SecondStack = createStackNavigator();

class RootApp extends React.Component {
  state = {
    isLoading: true,
    activitySubscription: null,
    user: null,
  };

  //get auth user when we load
  componentDidMount() {
    this.getUserData();
  }

  //   updateShowModal = () => {
  //     this.props.showModalAction(true);
  //   };

  // check if we have authenticated user, if we do set redux user state
  getUserData = async () => {
    try {
    } catch (error) {
      console.log('authentication error', error);
      this.setState({isLoading: false});
    }
  };

  render() {
    // const {userAuth, showModal} = this.props;
    // console.log('testing');
    // console.log(this.props.showModal);
    const {isLoading} = this.state;

    // console.log('show modal here', showModal);
    // if (showModal) {
    //   this.updateShowModal();
    // }

    // if (isLoading) {
    //   return null;
    // }
    return (
      <>
        <NavigationContainer>
          <SecondStack.Navigator headerMode="none" initialRouteName="Auth">
            <SecondStack.Screen name="Auth" component={AuthStackScreens} />
          </SecondStack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     userAuth: state.userData,
//   };
// };

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }

// export default RootApp;

export default RootApp;
