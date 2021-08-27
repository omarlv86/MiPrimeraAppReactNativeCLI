import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: { contador }
            </Text>

            <TouchableOpacity
              onPress={ () => setContador(contador + 1) }
            >
                <View style={styles.button}>
                  <Text>Click me!!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    title: {
        textAlign:'center',
        fontSize:40,
        top: -15
    },
    button: {
        backgroundColor:'#a2a2a2',
        borderRadius: 100,
        margin: 20
    }
})
