import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Row(person) {
    return(
        <Text style = {styles.row}>{person.item.lastname + ', ' + person.item.firstname}</Text>
    )
}

const styles = StyleSheet.create({
    row: {
        marginTop: 32,
        marginBottom: 32
    }
  });