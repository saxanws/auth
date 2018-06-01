import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, CardSection, Card, Input}from './common/index';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {email:'', password: '', error: ''};

    onButtonPress() {
        const {email, password} = this.state;
        this.setState({error:''});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication failed.'});
                    });
            });
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
                        onChangeText = {password => this.setState({password})}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>Login</Button>
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