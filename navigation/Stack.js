import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from "../screens/Detail";
import Tabs from "./Tabs";

const stack = createStackNavigator();

const Stack = () => (
    <stack.Navigator>
        <stack.Screen name="Tabs" component={Tabs} />
        <stack.Screen name="Detail" component={Detail} />
    </stack.Navigator>
)

export default Stack;
