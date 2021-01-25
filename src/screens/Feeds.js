import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import {getFeeds} from '../api/Api';
import {Feed} from '../components/Feed';

export default function Feeds({navigation}) {
  const [feedData, setFeedData] = useState();
  const handleFeeds = () => {
    getFeeds().then((r) => setFeedData([...r.data]));
  };
  useEffect(() => {
    handleFeeds();
  }, []);

  const renderItem = ({item}) => {
    return <Feed item={item} navigation={navigation} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
