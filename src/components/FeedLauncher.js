import React from 'react';
import {View, FlatList} from 'react-native';
import {Feed} from '../components/Feed';

export default function FeedLauncher({data, navigation, hideComment}) {
  const renderItem = ({item}) => {
    return (
      <Feed item={item} navigation={navigation} hideComment={hideComment} />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
