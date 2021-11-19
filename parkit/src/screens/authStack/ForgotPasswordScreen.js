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
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as actions from '../../redux/Actions';

class ForgotPasswordScreen extends React.Component {
  state = {
    email: 'savon40@gmail.com',
    isLoading: false,
    error: '',
  };

  // resetPassword = async () => {
  //   this.setState({isLoading: true});
  //   try {
  //     const {email} = this.state;
  //     console.log('email here: ', email);
  //     const user = await Auth.forgotPassword(email);
  //     const {navigation} = this.props;
  //     navigation.navigate('ForgotPasswordSubmitScreen', {email});
  //     this.setState({isLoading: false});
  //   } catch (err) {
  //     console.log(err);
  //     Alert.alert('Something Went Wrong :(', err.code, [{text: 'Okay'}]);
  //     this.setState({error: err});
  //   }
  // };

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
                  size={theme.SIZES.FONT * 0.975}
                  style={{paddingHorizontal: theme.SIZES.BASE}}>
                  Enter your email here. If there is an account related to this
                  email, you will receive a code to reset your password.
                </Text>
                <Block flex={0.03} center space="between"></Block>
                <Input
                  rounded
                  type="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  style={styles.input}
                  color={theme.COLORS.PRIMARY}
                  value={email}
                  onChangeText={email => this.setState({email})}
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

export default ForgotPasswordScreen;

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
