import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons, Ionicons, Feather, AntDesign} from '@expo/vector-icons';

import Like from '../screens/Like';
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Profile from "../screens/Profile";

const tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";

export default ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);

    return (
        <tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black",
                }
            }}
        >
            <tabs.Screen
                name="Movies"
                component={Movies}
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons
                            name="local-movies"
                            size={26}
                            color={focused ? "white" : "grey"}
                        />
                    )
                }}
            />
            <tabs.Screen
                name="Like"
                component={Like}
                options={{
                    tabBarIcon: ({focused}) => (
                        <AntDesign
                            name="heart"
                            size={26}
                            color={focused ? "white" : "grey"}
                        />
                    )
                }}
            />
            <tabs.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Feather
                            name="search"
                            size={26}
                            color={focused ? "white" : "grey"}
                        />
                    )
                }}
            />
            <tabs.Screen
                name="Profile"
                component={Profile}options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="md-person"
                        size={26}
                        color={focused ? "white" : "grey"}
                    />
                )
            }}
            />
        </tabs.Navigator>
    )
}

