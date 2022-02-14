import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemContainer = ({ children, onTap }) => {

    return (
        <TouchableOpacity onPress={onTap} style={styles.itemContainer}>
            {children}
        </TouchableOpacity>
    )
}

export default ItemContainer

const styles = StyleSheet.create({
    itemContainer: {
        width: 400,
        maxWidth: '80%',
        backgroundColor: '#f6f6f6',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .05,
        shadowRadius: 10,
        elevation: 2,
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6,
    }
})