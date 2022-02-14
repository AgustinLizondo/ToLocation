import { StyleSheet, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { ItemsContext } from './Provider/Provider';
import ItemContainer from './ItemContainer';

const ItemList = () => {
    const [toLocationList, setToLocationList] = useContext(ItemsContext);
    const [inputValue, setInputValue] = useState('');

    const ItemRendered = ({ item }) => {

        const handleRemoveItem = ({ name, id }) => {
            setToLocationList(toLocationList.filter(item => item.id != id))
        }

        return (
            <ItemContainer key={item.id} onTap={() => handleRemoveItem(item)}>
                <Text>{item.name}</Text>
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

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={{ backgroundColor: '#000', width: 160, height: 80, lineHeight: 120, marginTop: 240, color: '#FFF' }}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <TouchableOpacity style={{ backgroundColor: '#eee', width: 160, height: 40 }} onPress={() => handleAddItem(inputValue)}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <FlatList
                renderItem={ItemRendered}
                data={toLocationList}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({})