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
        alignSelf: 'center',
        width: 1000,
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
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 6,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
    }
})