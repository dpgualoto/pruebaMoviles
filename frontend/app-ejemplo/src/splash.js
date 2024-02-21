import React, { useEffect } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';


class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('/Users/dp_12/Desktop/Deber dispositivos movils/mobil-2-main/frontend/app-ejemplo/src/uce.png')} // Ruta de la imagen
                    style={styles.image} // Estilos para la imagen
                    resizeMode="contain" // Modo de ajuste de la imagen
                />
                <Text>Splash Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200, // Ancho de la imagen
        height: 200, // Altura de la imagen
        marginBottom: 20, // Espacio inferior de la imagen
    },
});

export default Splash;
