import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Profile = ({navigation}) => {

    return (
        <View>
            <Text style={styles.center}>Main</Text>
            <Button
                onClick={() => navigation.navigate("Detail")}
                title="Go to Detail"
            />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
