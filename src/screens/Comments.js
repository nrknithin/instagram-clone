import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getComments} from '../api/Api';

export default function Comments() {
  const [commentData, setCommentData] = useState();
  const handleFeeds = () => {
    getComments().then(
      (r) => setCommentData([...r.data]),
      // console.log(r.data),
    );
  };
  useEffect(() => {
    if (!commentData) {
      handleFeeds();
    }
  }, [commentData]);
  const renderItem = ({item}) => {
    // console.log(commentData.indexOf(item));
    return (
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View>
            <Text style={{fontWeight: 'bold'}}>{item.username}</Text>
          </View>
          <View>
            <Text>{item.comments}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={commentData}
        renderItem={renderItem}
        keyExtractor={(item) => commentData.indexOf(item)}
      />
    </View>
  );
}
