import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>My name is {getNames('Francoise', 'Elodie', 'Lucie')}</Text>
    </View>
  )
}

export default App

const getNames = (firstName, secondName, thirdName) => {
  return firstName + "" + secondName + "" + thirdName;
}


//TEST STYLE EXTERNALISE
// export default function App () {
//   return (
//     <View style= {styles.wrapper}>
//       <View style= {styles.viewONe}>
//         <Text style={styles.textOne}>Premier pas React Native</Text>
//         <Text style={styles.textOne}>Début</Text>
//         <Text style={styles.textOne}>C'est moche</Text>
//       </View>

//       <View style={styles.viewTwo}>
//         <Text style={styles.textTwo}>Deuxième pas React Native</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   wrapper : {marginTop: 50, flexDirection: 'column'},
//   viewONe : {backgroundColor: 'lightpink'},
//   textOne : {fontFamily: 'Cochin'},
//   viewTwo :{backgroundcolor: 'purple'},
//   textTwo : {fontFamily: 'Cochin', fontSize: 20, fontWeight: 'bold'},
// })