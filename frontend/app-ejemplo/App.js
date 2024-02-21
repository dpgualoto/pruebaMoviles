import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import React, { useState, useEffect } from 'react';



export default function App() {
    return (

        // principal 
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    );
}

//Implementación del Splash

/*export default function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true); 
        }, 2000);
    }, []);

    return (
        <NavigationContainer>
            {!isReady ? (
                <View style={styles.container}>
                    <Image
                        source={require('/Users/dp_12/Desktop/Deber dispositivos movils/mobil-2-main/frontend/app-ejemplo/src/uce.png')} 
                        style={styles.image} 
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Diego Gualoto</Text>
                    <Text style={styles.text}>Prueba de dispositivos moviles</Text>
                </View>
            ) : (
                <Navigation />
            )}
        </NavigationContainer>
    );
}*/




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    image: {
        width: 300, 
        height: 300, 
        marginBottom: 20, 
    },
    text: {
        fontSize: 24, 
        color: 'Black', 
        fontWeight: 'bold',
    },
});



