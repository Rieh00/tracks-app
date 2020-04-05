import React from 'react';
import {TouchableOpacity} from "react-native";
import {Text} from "react-native-elements";
import Spacer from "./Spacer";
import { withNavigation} from "react-navigation";

const NavLink = ({navigation, routeName, linkText}) => {

    return (
        <Spacer>
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
            >
                <Text style={{color: 'blue'}}>{linkText}</Text>
            </TouchableOpacity>
        </Spacer>
    );
};

export default withNavigation(NavLink);