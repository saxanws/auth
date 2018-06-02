import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Spinner, Button, Card, CardSection} from "./common/index";
import LoginForm from './LoginForm';
import firebase from 'firebase';


class App extends Component {
    state = {loggedIn: null};
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCEReDN07S7DX48ODJf7i97h0oX2fj2lp0",
            authDomain: "authentication-9fc7c.firebaseapp.com",
            databaseURL: "https://authentication-9fc7c.firebaseio.com",
            projectId: "authentication-9fc7c",
            storageBucket: "authentication-9fc7c.appspot.com",
            messagingSenderId: "202458821363"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.containButton}>
                        <Button onPress = {() => firebase.auth().signOut()}>Logout</Button>
                    </View>
                );
            case false:
                return <LoginForm/>
            default:
                return <Spinner size = "large"/>
        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText = "Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containButton: {
        flexDirection: 'row',
    }
})


export default App;