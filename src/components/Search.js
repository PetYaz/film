import React from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.searchContent}>
                    <TextInput inlineImageLeft='search_icon' style={styles.textinput} placeholder='Titre du film'/>
                    <Button title='Rechercher' onPress={() => {}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 15,
        backgroundColor: '#F44802',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    textinput: {
        height: 50,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    searchContent: {
        marginTop: 70
    }
})
