import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({navigation}) => {

    return (
        <View>
            <Text>This is the TrackListScreen</Text>
            <Button
                title="Go to TrackCetail Screen"
                onPress={() => {navigation.navigate('TrackDetail')}}
            />
        </View>
    );

};

const styles = StyleSheet.create({

});

export default TrackListScreen;