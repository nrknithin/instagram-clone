import React from 'react';
import {Image, View} from 'react-native';
import {Icon} from 'react-native-ui-kitten';
import instgramIcon from '../assets/instagram.png';

export default function FeedHeader() {
  return (
    <View
      style={{justifyContent: 'space-between', flex: 1, flexDirection: 'row'}}>
      <Icon name="camera-outline" width={30} height={30} fill={'#111'} />
      <Image source={instgramIcon} style={{width: 100, height: 30}} />
      <Icon
        name="message-circle-outline"
        width={30}
        height={30}
        fill={'#111'}
      />
    </View>
  );
}
