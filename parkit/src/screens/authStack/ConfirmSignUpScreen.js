import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import theme from '../../constants/Theme';
import Loading from '../../components/Loading';
import {Block, Button, Input, Text, NavBar} from 'galio-framework';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/Actions';

class ConfirmSignUpScreen extends React.Component {
  state = {
    code: '366696',
    error: '',
    isLoading: false,
  };

  // confirmSignUp = async () => {
  //   try {
  //     const {code} = this.state;
  //     this.setState({isLoading: true});
  //     this.setState({error: ''});
  //     //this.props.route.params.email
  //     await Auth.confirmSignUp(this.props.route.params.email, code, {
  //       forceAliasCreation: true,
  //     });
  //     const user = await Auth.signIn(
  //       this.props.route.params.email,
  //       this.props.route.params.password,
  //     );
  //     // const user = await Auth.signIn("seavon.sf@gmail.com", "Test1234");
  //     this.props.loadUser(user);
  //     const {navigation} = this.props;
  //     this.setState({isLoading: false});
  //     navigation.popToTop();
  //     navigation.navigate('Home');
  //   } catch (err) {
  //     console.log('login err', err);
  //     if (err.code === 'UserNotConfirmedException') {
  //       this.setState({error: 'Account not verified yet'});
  //     } else if (err.code === 'PasswordResetRequiredException') {
  //       this.setState({
  //         error: 'Existing user found. Please reset your password',
  //       });
  //     } else if (err.code === 'NotAuthorizedException') {
  //       this.setState({error: 'Forgot Password?'});
  //     } else if (err.code === 'UserNotFoundException') {
  //       this.setState({error: 'User does not exist!'});
  //     } else {
  //       Alert.alert('Something Went Wrong :(', err.message, [{text: 'Okay'}]);
  //       this.setState({error: err.code});
  //     }
  //     this.setState({isLoading: false});
  //   }
  // };

  // resend = async () => {
  //   const username = this.props.route.params.email;
  //   Auth.resendSignUp(username)
  //     .then(() => {
  //       console.log('code resent successfully');
  //     })
  //     .catch(e => {
  //       Alert.alert('Something Went Wrong :(', err.message, [{text: 'Okay'}]);
  //       console.log(e);
  //     });
  // };

  render() {
    const {code, isLoading} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Enter Confirmation Code</Text>
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
              <Block flex={1}>
                <Block flex={2}>
                  <Text
                    muted
                    center
                    size={theme.SIZES.FONT * 0.975}
                    style={{paddingHorizontal: theme.SIZES.BASE * 2.3}}>
                    You should have received a confirmation email at the email
                    address you specified. If you did not receive, please click
                    Resend
                  </Text>
                  <Block flex={0.1} center space="between"></Block>
                  <Input
                    rounded
                    type="number-pad"
                    placeholder="Code"
                    autoCapitalize="none"
                    style={styles.input}
                    color={theme.COLORS.PRIMARY}
                    value={code}
                    onChangeText={code => this.setState({code})}
                  />
                  <Block flex={0.4} center space="between"></Block>
                  <Button
                    round
                    color={theme.COLORS.PRIMARY}
                    disabled={!code || isLoading}
                    onPress={() => this.confirmSignUp()}>
                    Confirm
                  </Button>
                  <Button
                    color="transparent"
                    shadowless
                    onPress={() => this.resend}>
                    <Text
                      center
                      color={theme.COLORS.BLACK}
                      size={theme.SIZES.FONT * 1.25}>
                      Resend Code
                    </Text>
                  </Button>
                </Block>
              </Block>
            </>
          )}
        </Animatable.View>
      </View>
    );
  }
}

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

const mapStateToProps = state => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmSignUpScreen);

