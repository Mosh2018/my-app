import React from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDeviceOrientation, useDimensions} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";

export default function App() {
    console.log(useDimensions())

    const handlePress = () => console.log('On Press Functions' + new Date())
    const {landscape} = useDeviceOrientation()
    console.log('MOI OLEN CONSOLE  ' + landscape)
    const OpenAlert = () => Alert.alert('Not error', 'MOI', [
        {text: 'NO', onPress: () => console.log('OLEN NO') },
        {text: 'YES', onPress: () => console.log('OLEN YES')}
    ])
    return (
        <View style={[styles.container]}>
            <ViewImageScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
