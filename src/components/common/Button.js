import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Durch das children prop wird der Part, der in AlbumDetail in dem Button steht im Button
// gerendert. Wir haben Buy Now eingetragen, somit kann man jedem Button unterschiedliche
// Texte verpassen

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    // onPress ist eine Methode die TouchableOpacity zur Verfügung stellt.
    // quasi wie ein addEventListener("click")
    // Button hat diese Methode nicht. ALlerdings kann man Methoden als Props erstellen
    // und diese anschließend weiterschieben, wie in in diesem Fall
    // Wir holen uns die onPress Methode als prop aus dem AlbumDetail Button
    // Dadurch können wir für jeden Button unterschiedliche Funktionen erstellen
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  }
};

// Da wir in der index.js alles aus dieser datei mit * direkt importieren und exportieren
// greift das default nicht mehr und muss angepasst werden
export { Button };
