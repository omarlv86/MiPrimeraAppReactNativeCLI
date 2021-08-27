import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor:'#808080',
            justifyContent:'center'
          }}>
            <Text style={{
              fontSize:50,
              textAlign:'center'
            }}>
              Hola  Omar React-Native TS
            </Text>
          </View>
    )
    
}
