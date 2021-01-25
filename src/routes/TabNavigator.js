import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from '../routes/StackNavigator';
import Profile from '../screens/Profile';
import Bookmark from '../screens/Bookmark';
import Search from '../screens/Search';
import Activities from '../screens/Activities';
import {Icon} from 'react-native-ui-kitten';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehaviour="initialRoute"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Feeds') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            } else if (route.name === 'Bookmark') {
              iconName = 'bookmark-outline';
            } else if (route.name === 'Activities') {
              iconName = 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }

            return (
              <Icon
                name={iconName}
                width={32}
                height={32}
                fill={focused ? '#111' : '#939393'}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#111',
          inactiveTintColor: '#939393',
        }}>
        <Tab.Screen name="Feeds" component={StackNavigator} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Activities" component={Activities} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
