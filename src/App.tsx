/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

function App(): React.JSX.Element {
  const [image, setImage] = useState(DiceOne);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;

    switch (dice) {
      case 1:
        setImage(DiceOne);
        break;
      case 2:
        setImage(DiceTwo);
        break;
      case 3:
        setImage(DiceThree);
        break;
      case 4:
        setImage(DiceFour);
        break;
      case 5:
        setImage(DiceFive);
        break;
      case 6:
        setImage(DiceSix);
        break;
      default:(DiceOne)
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
  <Pressable style={styles.button}
  
  onPress={rollDice}>
    <Text style={styles.buttonText}>Roll The Dice</Text>
  </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: { width: 200, height: 200},
  button: { padding: 10, borderRadius: 5, borderColor: '#8EA7E9', borderWidth: 2},
  buttonText: { fontSize: 20, color: '#8EA7E9', textTransform: 'uppercase'},
});

export default App;
