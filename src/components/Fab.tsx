import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'

interface Props {
    title: string;
    position?: 'br'| 'bl';
    onPress: () => void;
}
export const Fab = ({title, onPress, position = 'br'}: Props) => {
    const ios = () => {
        return (
            <TouchableOpacity 
              activeOpacity={ 0.5 }
              style={[
                styles.fabLocation, 
                ( position === 'bl') ? styles.left : styles.right
            ]}>
                
                <View style={styles.fab}>
                    <Text style={ styles.fabText}>{ title }</Text>
                </View>
            </TouchableOpacity>
            
        )
    }

    const android = () => {
        return (
            <View style={[
                styles.fabLocation, 
                ( position === 'bl') ? styles.left : styles.right
            ]}>
                <TouchableNativeFeedback
                  onPress={ onPress }
                  background={ TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                      <Text style={ styles.fabText}>{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            
        )
    }

    //console.log(title)
    return (Platform.OS === 'ios') ? ios() : android()
    
}

const styles = StyleSheet.create({
    fabLocation: {
        position:'absolute',
        bottom:100,
    },
    right:{
        right:25
    },
    left: {
        left:25
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height:60,
        borderRadius: 100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    fabText: {
        color: 'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})