import React, {useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function Movements({dados}) {

 const [showValue, setShowValue] = useState(false);

 const {id,label, value, date, type} = dados;

 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
        <Text>{date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{label}</Text>

            {showValue ? (
                <Text style={type === 1 ? styles.value : styles.espenses}>
                    R$ {type === 1 ? value: "-"+value}
                </Text> ):
                (
                    <View style={styles.skeleton}></View>
                )
            }
        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date:{
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    espenses:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})