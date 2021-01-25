import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Comments from '../screens/Comments';
import FeedHeader from '../components/Header';
import Bookmark from '../screens/Bookmark';
const Stack = createStackNavigator();

export default function BookmarkNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bookmark" component={Bookmark} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
