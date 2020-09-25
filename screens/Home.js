import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {

    return (
        <View>
            <Text style={styles.center}>Main</Text>
            <Button
                onPress={() => navigation.navigate("Detail")}
                title="Go to Detail"
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
