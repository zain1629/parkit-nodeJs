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

class ForgotPasswordSubmitScreen extends React.Component {
  state = {
    email: 'savon40@gmail.com',
    code: '059382',
    password: 'Test1234',
    confirmPassword: 'Test1234',
    isLoading: false,
    error: '',
  };

  // resetPassword = async () => {
  //   const {code, password, confirmPassword} = this.state;

  //   this.setState({isLoading: true});
  //   try {
  //     console.log('here i am email:: ', this.props.route.params.email);
  //     if (password !== confirmPassword) {
  //       this.setState({error: 'Passwords do not match!'});
  //     }

  //     await Auth.forgotPasswordSubmit(
  //       this.props.route.params.email,
  //       code,
  //       password,
  //     );
  //     const user = await Auth.signIn(this.props.route.params.email, password);

  //     this.setState({isLoading: false});
  //     this.props.loadUser(user);
  //     const {navigation} = this.props;
  //     navigation.popToTop();
  //     navigation.navigate('Home');
  //   } catch (err) {
  //     console.log('error here', err);
  //     this.setState({error: err});
  //     this.setState({isLoading: false});
  //   }
  // };

  render() {
    const {code, error, password, confirmPassword, isLoading} = this.state;
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={theme.COLORS.BACKGROUND}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Forgot Password?</Text>
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
                <Text
                  muted
                  center
                  size={theme.SIZES.FONT * 0.975}
                  style={{paddingHorizontal: theme.SIZES.BASE}}>
                  You should have received a confirmation code. Please enter
                  that here, along with your new password.
                </Text>
                <Input
                  rounded
                  type="number-pad"
                  autoCapitalize="none"
                  style={styles.input}
                  color={theme.COLORS.PRIMARY}
                  value={code}
                  onChangeText={code => this.setState({code})}
                />
                <Input
                  rounded
                  password
                  viewPass
                  placeholder="New Password"
                  style={styles.input}
                  color={theme.COLORS.PRIMARY}
                  value={password}
                  onChangeText={password => this.setState({password})}
                />
                <Input
                  rounded
                  password
                  viewPass
                  placeholder="Confirm New Password"
                  style={styles.input}
                  color={theme.COLORS.PRIMARY}
                  value={confirmPassword}
                  onChangeText={confirmPassword =>
                    this.setState({confirmPassword})
                  }
                />
                {/* </Block>
              <Block flex> */}
                <Block flex={0.1} center space="between"></Block>

                <Button
                  round
                  color={theme.COLORS.PRIMARY}
                  onPress={() => this.resetPassword()}>
                  Reset Password
                </Button>
                <Button
                  color="transparent"
                  shadowless
                  onPress={() => navigation.navigate('SignInScreen')}>
                  <Text
                    center
                    color={theme.COLORS.BLACK}
                    size={theme.SIZES.FONT * 1.25}>
                    Back to Sign in
                  </Text>
                </Button>
              </Block>
            </>
          )}
        </Animatable.View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordSubmitScreen);

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
