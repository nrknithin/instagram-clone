import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feeds from '../screens/Feeds';
import Comments from '../screens/Comments';
import FeedHeader from '../components/Header';
const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feeds"
        component={Feeds}
        options={{headerTitle: (props) => <FeedHeader />}}
      />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
