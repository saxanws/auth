import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from "./common/index";
import LoginForm from './LoginForm';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCEReDN07S7DX48ODJf7i97h0oX2fj2lp0",
            authDomain: "authentication-9fc7c.firebaseapp.com",
            databaseURL: "https://authentication-9fc7c.firebaseio.com",
            projectId: "authentication-9fc7c",
            storageBucket: "authentication-9fc7c.appspot.com",
            messagingSenderId: "202458821363"
        });
    }
    render() {
        return (
            <View>
                <Header headerText = "Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;