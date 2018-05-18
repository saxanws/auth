import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {Button, CardSection, Card, Input}from './common/index';

class LoginForm extends Component {
    state = {text:''};
    render() {
        console.log(this.state.text);
        return (
            <Card>
                <CardSection>
                    <Input
                        style={{flex: 1}}
                        value = {this.state.text}
                        label={'Email: Here '}
                        onChangeText={text => this.setState({ text})}
                    />
                </CardSection>

                <CardSection/>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    };
};

export default LoginForm;