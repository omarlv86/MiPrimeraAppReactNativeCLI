import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
    return (
        <View style={{
            flex: 1,
            backgroundColor:'#fff',
            justifyContent:'center',
        }}>
            <Text style={{
                textAlign:'center',
                fontSize:40,
                top: -15
            }}>
                Contador: { contador }
            </Text>

            <TouchableOpacity
              onPress={ () => setContador(contador + 1) }
            >
                <View style={{
                    backgroundColor:'#a2a2a2',
                    borderRadius: 100
                }}>
                  <Text>Click me!!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
