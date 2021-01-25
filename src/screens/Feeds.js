import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {getFeeds} from '../api/Api';
import FeedLauncher from '../components/FeedLauncher';

export default function Feeds({navigation}) {
  const [feedData, setFeedData] = useState();
  const handleFeeds = () => {
    getFeeds().then((r) => setFeedData([...r.data]));
  };
  useEffect(() => {
    if (!feedData) {
      handleFeeds();
    }
  }, [feedData]);

  return <FeedLauncher data={feedData} navigation={navigation} />;
}
