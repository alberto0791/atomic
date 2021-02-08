//Libraries
import React from 'react'
import {
    StatusBar,
    Platform,
} from 'react-native'


 //Class
export function TopBar() {
    return (
        <StatusBar
            translucent={ false }
            animated={ true }
            backgroundColor={ Platform.OS === 'android' ? '#000' : 'transparent' }
            barStyle={ Platform.OS === 'android' ? 'light-content' : 'dark-content' }
        />       
    );
}
