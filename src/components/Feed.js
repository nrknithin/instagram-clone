import React, {useState, useEffect, useContext} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-ui-kitten';
import {DataContext} from '../context/DataContext';
import {FeedTitle} from './FeedTitle';

export function Feed({item, navigation}) {
  const [like, setLike] = useState(false);
  const [bkicon, setBkicon] = useState(false);
  const {removeBookmark, bookmark, addBookmark} = useContext(DataContext);

  const addRemoveBK = (feed) => {
    bkicon ? removeBookmark(feed.id) : addBookmark(feed);
    setBkicon(!bkicon);
  };
  useEffect(() => {
    let newbkicon = bookmark.filter((bk) => {
      return bk.id === item.id;
    });
    setBkicon(newbkicon.length ? true : false);
  }, []);
  return (
    <View style={styles.card}>
      <View
        style={{
          padding: 10,
          flex: 1,
          flexDirection: 'row',
          borderColor: 'lightgrey',
          borderWidth: 1,
        }}>
        <Avatar
          source={{uri: item['low thumbnail']}}
          size="small"
          style={styles.cardAvatar}
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.cardTitle}>{item.channelname}</Text>
        </View>
        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <Icon
            style={styles.icon}
            name="more-vertical-outline"
            width={20}
            height={20}
            fill={'#111'}
          />
        </View>
      </View>
      <View>
        <Image
          source={{uri: item['high thumbnail']}}
          style={styles.cardImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.3,
          }}>
          <Icon
            style={styles.icon}
            onPress={() => {
              setLike(!like);
            }}
            name={like ? 'heart' : 'heart-outline'}
            width={30}
            height={30}
            fill={like ? '#ff0000' : '#000000'}
          />
          <Icon
            style={styles.icon}
            onPress={() => navigation.navigate('Comments')}
            name="message-circle-outline"
            width={30}
            height={30}
            fill={'#111'}
          />
          <Icon
            style={styles.icon}
            name="navigation-2-outline"
            width={30}
            height={30}
            fill={'#111'}
          />
        </View>
        <View style={{flex: 0.7, alignItems: 'flex-end'}}>
          <Icon
            style={styles.icon}
            onPress={() => {
              addRemoveBK(item);
            }}
            name={bkicon ? 'bookmark' : 'bookmark-outline'}
            width={30}
            height={30}
            fill={'#111'}
          />
        </View>
      </View>
      <View
        style={{
          margin: 5,
          flexDirection: 'row',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <Text style={{...styles.cardTitle}}>{item.channelname + ' '}</Text>
          {/* <Text>{item.title}</Text> */}
          <FeedTitle title={item.title} />
        </View>
      </View>

      <TouchableOpacity
        style={{marginLeft: 5}}
        onPress={() => navigation.navigate('Comments')}>
        <Text
          category="p2"
          style={{
            ...styles.cardTitle,
            fontWeight: 'bold',
            color: 'grey',
          }}>
          View all comments
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    // marginBottom: 5,
  },
  cardImage: {
    width: '100%',
    height: 300,
    flex: 1,
    backgroundColor: 'white',
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
  cardAvatar: {
    marginRight: 16,
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: 'lightgrey',
  },
  icon: {
    marginRight: 10,
  },
});
