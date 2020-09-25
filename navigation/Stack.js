import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from "../screens/Detail";
import Home from "../screens/Home";

const stack = createStackNavigator();

const Stack = () => (
    <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Detail} />
    </stack.Navigator>
)

export default Stack;
