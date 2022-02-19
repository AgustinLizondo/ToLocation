import { StyleSheet, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { ItemsContext } from './Provider/Provider';
import ItemContainer from './ItemContainer';
import Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';

const ItemList = () => {
    const [toLocationList, setToLocationList] = useContext(ItemsContext);
    const [inputValue, setInputValue] = useState('');

    const ItemRendered = ({ item }) => {

        const handleRemoveItem = ({ name, id }) => {
            setToLocationList(toLocationList.filter(item => item.id != id))
        }

        return (
            <ItemContainer key={item.id} onTap={() => handleRemoveItem(item)}>
                <Text style={styles.itemListText}>{item.name}</Text>
            </ItemContainer>
        )
    }

    const handleAddItem = (itemName) => {
        setToLocationList([...toLocationList, {
            name: itemName,
            id: (Math.random(Math.random() * 100)),
        }]);
        setInputValue('');
    }
    let content;
    if (toLocationList.length != 0) {
        content =
            <FlatList
                renderItem={ItemRendered}
                data={toLocationList}
                keyExtractor={item => item.id}
            />
    } else {
        content = <Text stlye={{ color: '#000' }}>No hay lista que mostrar</Text>
    }

    return (
        <>
            <View style={styles.card}>
                <TextInput
                    style={styles.inputText}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    onSubmitEditing={() => handleAddItem(inputValue)}
                    blurOnSubmit={false}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => handleAddItem(inputValue)}
                >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {content}
            </View>
        </>
    )
}

export default ItemList

const styles = StyleSheet.create({
    card: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        backgroundColor: Colors.Black,
        width: 160,
        height: 80,
        lineHeight: 48,
        fontSize: 24,
        color: Colors.White,
        fontFamily: 'Poppins-Black',
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        paddingHorizontal: 8
    },
    submitButton: {
        backgroundColor: Colors.SemiBoldViolet,
        width: 160,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
    submitText: {
        fontFamily: 'Poppins-Black',
        color: Colors.White,
        textTransform: 'uppercase',
    },
    itemListText: {
        fontFamily: 'Poppins-Regular',
    }
})