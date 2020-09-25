import React from 'react';
import {View, Text, Button} from 'react-native';

const Movies = ({navigation}) => (
        <View>
            <Text>Movies</Text>
            <Button
                onPress={() => navigation.navigate("Detail")}
                title="Go to Detail"
            />
        </View>
);

export default Movies;
