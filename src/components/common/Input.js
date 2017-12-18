import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label}</Text>
      <TextInput
        // Die untere Umrahmung verschwinden lassen
        underlineColorAndroid='transparent'
        placeholder={placeholder}
        // Autokorrektur ausstellen
        autoCorrect={false}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    // das Input Feld nimmt 2/3 ein
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    // das Label nimmt 1/3 ein
    flex: 1
  }

};

export { Input };
