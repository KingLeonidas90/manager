/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Duch den Import werden die zwei Libraries von React und React Native eingebunden
// Die Folie zu React vs React Native unbedingt anschauen
// Die Imports dienen dazu, Code aus anderen Dateien verwenden zu können.
// Nur so erhält man Zugriff auf Variablen, Funtkionen etc aus anderen Dateien


// import React, { Component } from 'react';
// // einzelne Elemente / Bausteine werden aus der React Native Libraby importiert
// // vorher können diese nicht eingesetzt werden, da es keine globalen Variablen gibt
// import {
//   // Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// Komponenten sind Objekte, die anschließend auf dem Screen gerendert werden sollen
// Meistens bestehend aus Javascript Funktionen
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//         BUBI HEAD
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// Nötige Imports tätigen
import React from 'react';
import { Text, View } from 'react-native';


// Component erstellen namens Header
const Header = (props) => {
  // oder aber man lässt die Zeile weg und schreibt einfach mystyle.textStyle
  const { textStyle, viewStyle } = mystyle;
  return (
    <View style={viewStyle}>
      {/* Der Header wird mehrfach verwendbar gemacht, indem die Werte manuell in der Parent
        Komponenten eingetragen werden, somit gibt es keinen hardgecodeten Text */}
    <Text style={textStyle}> {props.textHeader} </Text>
    </View>
  );
};

const mystyle = {

  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 20
  }
};
// Die Komponente für andere Klassen verfügbar machen
export { Header };
