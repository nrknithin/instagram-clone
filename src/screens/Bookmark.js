import React, {useContext} from 'react';
import FeedLauncher from '../components/FeedLauncher';
import {DataContext} from '../context/DataContext';

export default function Bookmark({navigation}) {
  const {bookmark} = useContext(DataContext);

  return (
    <FeedLauncher data={bookmark} navigation={navigation} hideComment={true} />
  );
}
