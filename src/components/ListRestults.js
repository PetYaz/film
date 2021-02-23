import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { Card } from './card';
import data from '../helpers/filmDatas'
export default class ListResults extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={data}
                keyExtractor={key => key.id.toString()}
                renderItem={({item}) => <Card key={item.id.toString()} movieTitle={item.title} releaseDate={item.release_date} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        paddingHorizontal: 0,
    }
});