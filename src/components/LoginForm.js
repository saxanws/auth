import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, CardSection, Card, Input, Spinner}from './common/index';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {email:'', password: '', error: '', loading: false};

    onButtonPress() {
        const {email, password} = this.state;
        this.setState({error:'', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoggingFail.bind(this));
            });
    }

    onLoggingFail() {
        this.setState({
            error: 'Authentication failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size = "small"/>
        } else {
            return(
                <Button onPress = {this.onButtonPress.bind(this)}>Login</Button>
            );
        }
    }

    render() {
        console.log(this.state.email);
        return (
            <Card>
                <CardSection>
                    <Input
                        value = {this.state.email}
                        placeholder = {'email@gmail.com'}
                        autocorrect = {false}
                        label={'Email'}
                        onChangeText={email => this.setState({ email})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value = {this.state.password}
                        label = {'Password'}
                        placeholder = {'password'}
                        onChangeText = {password => this.setState({password})}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
};

const styles = {
    errorTextStyle : {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;