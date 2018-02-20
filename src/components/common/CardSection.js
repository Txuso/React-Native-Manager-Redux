import React from 'react';
import { View } from 'react-native';

let a;
const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}> 
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: a !== undefined ? a : 'row',
        borderColor: '#ddd',
        position: 'relative'
    }  
};

export { CardSection };
