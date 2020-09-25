import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {movieApi} from '../api';

const Movies = () => {

    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null
    })

    const getData = async() => {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
        const [upcoming, upcomingError] = await movieApi.upcoming();
        setMovies({
            nowPlayingError,
            popularError,
            upcomingError,
            nowPlaying,
            popular,
            upcoming
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.tx}>
                NowPlaying is {movies.nowPlaying?.length}
            </Text>
        </View>
    )

};

export default Movies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    tx: {
        color: "white",
        fontSize: 20
    }
})
