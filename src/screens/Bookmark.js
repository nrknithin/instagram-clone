import React, {useEffect, useContext} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Feed} from '../components/Feed';
import {DataContext} from '../context/DataContext';

export default function Bookmark({navigation}) {
  const {bookmark} = useContext(DataContext);

  const renderItem = ({item}) => {
    return <Feed item={item} navigation={navigation} hideComment={true} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={bookmark}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
