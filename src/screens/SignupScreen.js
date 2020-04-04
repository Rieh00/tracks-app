import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const SignupScreen = ({navigation}) => {

    return (
        <View>
            <Text>This is the SignupScreen</Text>
            <Button
                title="Go to Signin Screen"
                onPress={() => {navigation.navigate('Signin')}}
            />
            <Button
                title="Go to MainFlow"
                onPress={() => {navigation.navigate('mainFlow')}}
            />
        </View>
    );

};

const styles = StyleSheet.create({

});

export default SignupScreen;