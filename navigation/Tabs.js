import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Like from '../screens/Like';
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Profile from "../screens/Profile";

const tabs = createBottomTabNavigator();

const Tabs = () => (
    <tabs.Navigator>
        <tabs.Screen name="Movies" component={Movies} />
        <tabs.Screen name="Like" component={Like} />
        <tabs.Screen name="Search" component={Search} />
        <tabs.Screen name="Profile" component={Profile} />
    </tabs.Navigator>
)

export default Tabs;
