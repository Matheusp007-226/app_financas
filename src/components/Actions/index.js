import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainerRefContext } from '@react-navigation/native';

export default function Actions({navigation}) {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Detalhe")}>
             <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000" />
             </View>
             <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
             <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="exit-run" size={26} color="#000" />
             </View>
             <Text style={styles.labelButton}>Saídas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
             <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000" />
             </View>
             <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
             <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000" />
             </View>
             <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
             <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000" />
             </View>
             <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
             <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
             </View>
             <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        marginStart: 14,
        marginEnd: 14
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButton:{
        backgroundColor: '#ecfaf1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})