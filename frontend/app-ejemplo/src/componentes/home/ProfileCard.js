import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitch = <Icon name={'twitch'} size={50} color={'purple'}/>
const reddit = <Icon name={'reddit'} size={50} color={'red'}/>
const pinterest = <Icon name={'pinterest'} size={50} color={'orange'}/>
const slack = <Icon name={'slack'} size={50} color={'#4A154B'}/>
const tumblr = <Icon name={'tumblr'} size={50} color={'blue'}/>
const Vimeo = <Icon name={'vimeo'} size={50} color={'#1AB7EA'}/>
//const Kwai = <Icon name={'kwai'} size={50} color={'#1AB7EA'}/>

import KwaiIcon from '/Users/dp_12/Desktop/Deber dispositivos movils/mobil-2-main/frontend/app-ejemplo/src/kwai_icon.png';


const ProfileCard = () => {
    const user = {
        avatar: "https://i.pinimg.com/736x/1b/19/67/1b1967164a3299f37d3ab1609c01b9be.jpg",
        coverPhoto: "https://wallpapercave.com/dwp1x/wp4201293.jpg",
        name: "Diego Gualoto"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.reddit.com/user/Vast-Amount6806/')
                }}>
                    {reddit}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.twitch.tv/dpgualoto')
                }}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.pinterest.es/dgualoto1224/')
                }}>
                    {pinterest}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://app.slack.com/client/T0595M4LGHX/D058CFYKB7Z')}>
                    {slack}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.tumblr.com/dashboard')}>
                    {tumblr}
                </TouchableWithoutFeedback>
               
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.kwai.com/es')}>
                <Image source={KwaiIcon} style={styles.kwaiIcon} />
                </TouchableWithoutFeedback>
              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    },
    kwaiIcon: {
        width: 50,
        height: 50,
        tintColor: 'orange'
    }
});
export default ProfileCard