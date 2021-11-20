import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../../constants/Theme';
import Loading from '../../components/Loading';
import ZipCodes from '../../constants/ZipCodes';
import {Block, Button, Input, Text, NavBar} from 'galio-framework';

const {width, height} = Dimensions.get('screen');

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/Actions';

class SignUpScreen extends React.Component {
  state = {
    email: 'seavon.sf@gmail.com',
    password: 'Test1234',
    confirmPassword: 'Test1234',
    zip_code: '11697',
    error: '',
    isLoading: false,
  };

  // signUp = async () => {
  //   try {
  //     const {email, password, confirmPassword, zip_code} = this.state;
  //     if (password !== confirmPassword) {
  //       Alert.alert('Something Went Wrong :(', 'Passwords do not match', [
  //         {text: 'Okay'},
  //       ]);
  //     } else if (!ZipCodes.includes(zip_code)) {
  //       Alert.alert(
  //         'Something Went Wrong :(',
  //         "I'm sorry, but we are only catering to Queens, NY at this time",
  //         [{text: 'Okay'}],
  //       );
  //     } else {
  //       this.setState({isLoading: true});
  //       const user = await Auth.signUp(email, password);
  //       const {navigation} = this.props;
  //       navigation.navigate('ConfirmSignUpScreen', {email, password});
  //     }
  //     this.setState({isLoading: false});
  //   } catch (err) {
  //     console.log('login err', err);
  //     if (err.code === 'UserNotConfirmedException') {
  //       Alert.alert('Something Went Wrong :(', 'Account not verified yet', [
  //         {text: 'Okay'},
  //       ]);
  //     } else if (err.code === 'PasswordResetRequiredException') {
  //       Alert.alert('Something Went Wrong :(', 'Password needs to be reset', [
  //         {text: 'Okay'},
  //       ]);
  //       this.setState({
  //         error: 'Existing user found. Please reset your password',
  //       });
  //     } else if (err.code === 'NotAuthorizedException') {
  //       Alert.alert('Something Went Wrong :(', 'Password Incorrect', [
  //         {text: 'Okay'},
  //       ]);
  //     } else if (err.code === 'UserNotFoundException') {
  //       Alert.alert('Something Went Wrong :(', 'User does not exist!', [
  //         {text: 'Okay'},
  //       ]);
  //     } else if (err.code === 'UsernameExistsException') {
  //       Alert.alert('Something Went Wrong :(', 'Email is already in use', [
  //         {text: 'Okay'},
  //       ]);
  //     } else {
  //       Alert.alert('Something Went Wrong :(', err.code, [{text: 'Okay'}]);
  //     }
  //     this.setState({isLoading: false});
  //   }
  // };

  render() {
    const {email, password, confirmPassword, zip_code, isLoading, error} =
      this.state;
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={theme.COLORS.BACKGROUND}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Sign Up!</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: theme.COLORS.WHITE,
            },
          ]}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Block flex middle>
                <Block flex middle>
                  <Block>
                    <Block flex space="between">
                      <Block flex={0.8} middle space="between">
                        <Block center flex={0.8}>
                          <Block flex space="between">
                            <Block>
                              <Block
                                width={width * 0.8}
                                style={{marginBottom: 5}}>
                                <Input
                                  rounded
                                  type="email-address"
                                  placeholder="Email"
                                  autoCapitalize="none"
                                  color={theme.COLORS.PRIMARY}
                                  value={email}
                                  onChangeText={email => this.setState({email})}
                                />
                              </Block>
                              <Block
                                width={width * 0.8}
                                style={{marginBottom: 5}}>
                                <Input
                                  rounded
                                  password
                                  viewPass
                                  placeholder="Password"
                                  style={styles.input}
                                  color={theme.COLORS.PRIMARY}
                                  value={password}
                                  onChangeText={password =>
                                    this.setState({password})
                                  }
                                />
                              </Block>
                              <Block
                                width={width * 0.8}
                                style={{marginBottom: 5}}>
                                <Input
                                  rounded
                                  password
                                  viewPass
                                  placeholder="Confirm Password"
                                  style={styles.input}
                                  color={theme.COLORS.PRIMARY}
                                  value={confirmPassword}
                                  onChangeText={confirmPassword =>
                                    this.setState({confirmPassword})
                                  }
                                />
                              </Block>
                              <Block width={width * 0.8}>
                                <Input
                                  rounded
                                  type="number-pad"
                                  placeholder="Zip Code"
                                  autoCapitalize="none"
                                  style={styles.input}
                                  color={theme.COLORS.PRIMARY}
                                  value={zip_code}
                                  onChangeText={zip_code =>
                                    this.setState({zip_code})
                                  }
                                />
                              </Block>
                            </Block>
                            <Block center>
                              <Button
                                round
                                color={theme.COLORS.PRIMARY}
                                disabled={!email || !password || isLoading}
                                onPress={() => this.signUp()}>
                                Sign Up
                              </Button>
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate('SignInScreen')
                                }>
                                <Text
                                  right
                                  size={14}
                                  color={theme.COLORS.PRIMARY}>
                                  Already have an Account? Sign In
                                </Text>
                              </TouchableOpacity>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </>
          )}
        </Animatable.View>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
