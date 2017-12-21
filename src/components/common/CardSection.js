import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = myStyle;
  return (
    // Alle Primitiven Komponenten wie View, Text etc können das sytle Attribut defaultmässig
    // nutzen! Hier ist es möglich den Style als Array zu übergeben mit 2 Parametern
    // zum einen den Style den man unten definiert hat und zum anderen einen Style
    // der per prop übergeben wird. Hierbei wird der linke Style automatisch verwendet
    // und der rechte Style ergänzt bzw überschreibt den linken falls dopplungen vorkommen
  <View style={[containerStyle, props.style]}>
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
