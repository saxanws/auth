import React from 'react';
import {TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, value, onChangeText, autocorrect, placeholder, secureTextEntry}) => {
    const { textInput, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry = {secureTextEntry}
                placeholder = {placeholder}
                autocorrect = {autocorrect}
                value={value}
                onChangeText = {onChangeText}
                style={textInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
      flex: 2,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
    },
    labelStyle : {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle : {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center'
    }
})



export { Input };