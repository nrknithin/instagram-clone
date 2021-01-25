import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedNavigator from '../routes/FeedNavigator';
import Profile from '../screens/Profile';
import Bookmark from '../screens/Bookmark';
import Search from '../screens/Search';
import Activities from '../screens/Activities';
import {Icon} from 'react-native-ui-kitten';
import BookmarkNavigator from './BookmarkNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#111',
          inactiveTintColor: '#939393',
        }}>
        <Tab.Screen
          name="Feeds"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name={focused ? 'search' : 'search-outline'}
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkNavigator}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name={focused ? 'bookmark' : 'bookmark-outline'}
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Activities"
          component={Activities}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name={focused ? 'heart' : 'heart-outline'}
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
