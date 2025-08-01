// navigation/AdminBottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHomeScreen from '../screens/AdminHomeScreen';
import AdminManageChallengesScreen from '../screens/AdminChallengesScreen';
import AdminSettingsScreen from '../screens/AdminSettingsScreen'; // optional
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AdminBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="AdminHome"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'AdminHome') iconName = 'home-outline';
          else if (route.name === 'ManageChallenges') iconName = 'trophy-outline';
          else if (route.name === 'AdminSettings') iconName = 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="AdminHome"
        component={AdminHomeScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen
        name="ManageChallenges"
        component={AdminManageChallengesScreen}
        options={{ title: 'Challenges' }}
      />
      <Tab.Screen
        name="AdminSettings"
        component={AdminSettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}
