import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {Button, CardSection, Card, Input}from './common/index';

class LoginForm extends Component {
    state = {email:'', password: ''};
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

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    };
};

export default LoginForm;