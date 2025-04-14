import React,{useState} from 'react';
import {View,Button,Image, Platform, PermissionsAndroid, Alert, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CameraGalleryScreen = () => {
    const [imageUri, setImageUri] = useState<string | null>(null)


const requestPermission = async() => {
    if (Platform.OS === 'android'){
        const granted =await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

        return granted === PermissionsAndroid.RESULTS.GRANTED
    }
    return true;
}

const openCamera = async() => {
    const hasPermission = await requestPermission();
    if(!hasPermission){
        Alert.alert('Permission Denied', 'Camera permission is required');
        return;
    }

    launchCamera({mediaType: 'photo'},
        (response) =>{
            if(!response.didCancel && response.assets) {
                setImageUri(response.assets[0].uri || null)
            }
        }
    )
}

     const openGallery = () => {
        launchImageLibrary({mediaType:'photo'},
            (response) => {
                if(!response.didCancel && response.assets) {
                    setImageUri(response.assets[0].uri || null)
                }
            }
        )

     }

     return(
        <View style={styles.container}>
            <Button title='Open Camera' onPress={openCamera}/>
            <Button title='Open Gallery' onPress={openGallery}/>
             {imageUri && <Image source={{uri:imageUri}} style={styles.image}/> }
        </View>
     )

}

function setImageUri(arg0: string | null) {
    throw new Error('Function not implemented.');
}

const styles = StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', alignItems:'center', gap:20, backgroundColor:'lightyellow'
    },
    image:{
        width:200, height:200, marginTop:20

    }

})

export default CameraGalleryScreen;
