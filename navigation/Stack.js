import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Detail from "../screens/Detail";
import Tabs from "./Tabs";

const stack = createStackNavigator();

const Stack = () => (
    <stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: 'black',
                shadowColor: 'black'
            },
            headerTintColor: '#ffffff',
            headerBackTitleVisible: false
        }}
    >
        <stack.Screen name="Tabs" component={Tabs} />
        <stack.Screen name="Detail" component={Detail} />
    </stack.Navigator>
)

export default Stack;
