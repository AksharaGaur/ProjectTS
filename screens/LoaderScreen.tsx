import React, {useState} from 'react';
import {View, ActivityIndicator, Button, StyleSheet} from 'react-native';

const LoaderScreen = () => {
    const[loading, setLoading] = useState(false);

    const showLoader = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 3000);
    }

    return(
        <View style={styles.container}>
            <Button title='Show Loader' onPress={showLoader} />
            {loading && <ActivityIndicator size='large' color="blue"  />}
        </View>
    )
}

const styles= StyleSheet.create ({
    container:{ 
        flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'lightyellow'
    }

})



export default LoaderScreen;