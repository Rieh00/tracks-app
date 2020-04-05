import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign up for Tracker!'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='Sign Up'
            />

        <NavLink
            routeName='Signin'
            linkText='Already have an account? Sign in!'
        />
        </View>
    );

};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },

});

export default SignupScreen;