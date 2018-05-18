import React from 'react';
import {TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, value, onChangeText}) => {
    const { textInput } = styles;
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText = {onChangeText}
                style={textInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
      flex: 3
    },
    labeStyle : {
        flex: 1,
    }
})



export { Input };