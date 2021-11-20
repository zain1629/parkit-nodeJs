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

class SignInScreen extends React.Component {
  state = {
    email: 'savon40@gmail.com',
    password: 'Test1234',
    isLoading: false,
    error: '',
  };

  render() {
    const {email, password, isLoading, error} = this.state;
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={theme.COLORS.BACKGROUND}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Sign in!</Text>
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
                <Input
                  rounded
                  type="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  color={theme.COLORS.PRIMARY}
                  value={email}
                  onChangeText={email => this.setState({email})}
                />
                <Input
                  rounded
                  password
                  viewPass
                  placeholder="Password"
                  color={theme.COLORS.PRIMARY}
                  value={password}
                  onChangeText={password => this.setState({password})}
                />
                <Button
                  color="transparent"
                  shadowless
                  onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                  <Text
                    right
                    color={theme.COLORS.BLACK}
                    size={theme.SIZES.FONT * 0.75}>
                    Forgot Password?
                  </Text>
                </Button>

                <Block flex={0.1} center space="between" />

                <Button
                  round
                  color={theme.COLORS.PRIMARY}
                  disabled={!email || !password || isLoading}
                  onPress={() => this.login()}>
                  Sign In
                </Button>
                <Button
                  color="transparent"
                  shadowless
                  onPress={() => navigation.navigate('SignUpScreen')}>
                  <Text
                    center
                    color={theme.COLORS.BLACK}
                    size={theme.SIZES.FONT * 1.25}>
                    Don't have an account? Sign Up
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
  return {
    userAuth: state ? state.user : null,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
