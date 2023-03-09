import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import  Screen from '../components/Screen'
import color from '../misc/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const {width} = Dimensions.get('window')

const Player = () => {
  return (
  <Screen>
    <View style={styles.container}>
      <Text style={styles.audioCount}>1 / 99</Text>
      <View style={styles.midBannerContainer}>
        <MaterialCommunityIcons name="music-circle" size={300} color="black" />
      </View>
      <View style={styles.audioPlayerContainer}>
        <Text numberOfLines={1} style={styles.audioTitle}>Audio File Name</Text>
      </View>
      <Slider
  style={{width: width, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor={color.FONT_MEDIUM}
  maximumTrackTintColor={color.ACTIVE_BG}
/>
    </View>
  </Screen>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    audioCount: {
      textAlign: 'right',
      padding: 15,
      color: color.FONT_LIGHT,
      fontSize: 14,
    },
    midBannerContainer: {
      flex:1, 
      justifyContent:'center',
      alignItems: 'center',
    },
    audioTitle: {
      fontSize: 16,
      color: color.FONT,
      padding: 15,
    }
});
export default Player;