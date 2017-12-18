import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = myStyle;
  return (
  <View style={containerStyle}>
    {props.children}
  </View>
  );
};

const myStyle = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
