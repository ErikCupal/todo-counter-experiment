/**
 * 
 * Previous sample app
 * 
 * TODO: remove
 * 
 */

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import * as React from "react";
// import { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ViewStyle,
//   TextStyle,
//   Button,
//   ToastAndroid,
//   Image
// } from "react-native";

// interface State {
//   pokemonUrl: string;
//   showPokemon: boolean;
// }

// export default class Witcher extends Component<{}, State> {
//   constructor(props: {}) {
//     super(props);

//     this.state = {
//       pokemonUrl: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
//       showPokemon: false,
//     };
//   }

//   findPokemon() {
//     this.setState((state, props) => ({ ...state, showPokemon: true }));
//     console.log(this.state);
//     ToastAndroid.show("A Totodile appeared!!", ToastAndroid.SHORT);
//   }

//   pokemonImage() {
//     if (this.state) {
//       return this.state.showPokemon ?
//         <Image
//           source={{ uri: this.state.pokemonUrl }}
//           style={{ flex: 1 }} /> : <View />;
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Δ 😁 🍕 Nativo! i🍕 Coolo!
//         </Text>
//         <Text style={styles.instructions}>
//           Bango rango!!
//         </Text>
//         {this.pokemonImage()}
//         <View style={{
//           flex: 1,
//           alignItems: "stretch",
//           flexDirection: "row",
//         }}>
//           <View style={{ flex: 0.5 }} />
//           <View style={{ flex: 1, flexDirection: "row" }}>
//             <View style={{ flex: 2, backgroundColor: "powderblue" }}>
//               <View style={{ flex: 1, backgroundColor: "steelblue" }} />
//               <View style={{ flex: 2, backgroundColor: "lightgreen" }} />
//             </View>
//             <View style={{ flex: 1, backgroundColor: "skyblue" }} />
//           </View>
//           <View style={{ flex: 0.5 }} />
//         </View>
//         <View style={styles.buttons}>
//           <Button
//             title="Find Pokémon"
//             onPress={this.findPokemon.bind(this)}
//           >
//             Hio
//           </Button>
//           <Text style={{ flex: 1, backgroundColor: "yellow" }}>
//             Hio
//           </Text>
//         </View>
//       </View>

//     );
//   }
// }

// interface Style {
//   container: ViewStyle;
//   welcome: TextStyle;
//   instructions: TextStyle;
//   buttons: ViewStyle;
// }

// const styles = StyleSheet.create<Style>({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "stretch",
//     backgroundColor: "#F5FCFF",
//     margin: 10,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//     flex: 1,
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#2a85ff",
//     marginBottom: 5,
//     flex: 1,
//   },
//   buttons: {
//     flex: 1,
//     justifyContent: "space-around",
//     backgroundColor: "lightblue",
//     alignItems: "stretch",
//   }
// });
