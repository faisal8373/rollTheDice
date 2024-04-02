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

  StyleSheet,
  Text,
  ImageSourcePropType,
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

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>;

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

const Dice = ({imageUrl}: Diceprops) => {
  return (
    <View>
    <Image source={imageUrl} style={styles.image} />
    </View>
  );
}
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;

    switch (dice) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:(DiceOne)
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
  <Pressable style={styles.button}
  android_ripple={{ color: '#8EA7E9'}}
  onPress={rollDice}>
    <Text style={styles.buttonText}>Roll The Dice</Text>
  </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: { width: 200, height: 200},
  button: { padding: 10, borderRadius:105, borderColor: '#8EA7E9', borderWidth: 2},
  buttonText: { fontSize: 20, color: '#8EA7E9', textTransform: 'uppercase'},
});

export default App;
