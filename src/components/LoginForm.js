import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>
    );
  }

  renderError() {
    // mit DIeser Abfrage wird überprüft, ob error leer ist, wenn nein, dann wird der Code Block
    // ausgeführt. Ist Error ein leerer String, passiert nichts
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='E-Mail'
            placeholder='example@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />

        </CardSection>

        <CardSection>
          <Input
            label='Password'
            secureTextEntry
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

          {this.renderError()}


        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'center',
    color: 'red'
  }
};

// Um den State in der Komponenten einzubinden wird diese Funktion verwendet als Schnittstelle
// Diese verwendet einen globalen state
// const mapStatetoProps = state => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//     error: state.auth.error
//   };
// };

// ausgelagerte Form
  const mapStatetoProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
  };
// null da es noch keine mapToState methode gibt, 2ter Parameter = der Actioncreator, der verwendet
// werden soll in diesem fall, emailchanged
// Sobald der Actioncreator erzeugt wird, steht dieser über die props zur Verfügung
export default connect(mapStatetoProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
