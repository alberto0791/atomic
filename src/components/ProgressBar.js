//Libraries
import React from 'react'
import {
    Text,
    View,
    Dimensions,
    StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'

//Utils
import { renderIf } from '../utils/Functions'


 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height;

 export function Number( props ) {
     if( props.side == 'left' ) {
        return(
            <View 
                style={[
                    StyleProgressBar.circle, 
                    StyleProgressBar.fixed_center,
                    StyleProgressBar.border_blood,
                    props.fill.fill == 2 ? StyleProgressBar.back_blood : StyleProgressBar.back_none
                ]}
            >
                {renderIf(props.fill.fill == 2,
                    <Icon tipe='font-awesome' name='check' size={ HEIGHT * 0.035 } color='#fff'/>
                )}
                {renderIf(props.fill.fill != 2,
                    <Text style={[ StyleProgressBar.txt, StyleProgressBar.blood_txt ]}>1</Text>
                )}
                
            </View>
        );
     }else if( props.side == 'right' ) {
        return(
            <View 
                style={[
                    StyleProgressBar.circle, 
                    StyleProgressBar.fixed_center, 
                    props.fill.fill == 1 ? StyleProgressBar.border_light : StyleProgressBar.border_blood
                ]}
            >
                <Text 
                    style={[
                        StyleProgressBar.txt,
                        props.fill.fill == 1 ? StyleProgressBar.light_txt : StyleProgressBar.blood_txt
                    ]}
                >
                    2
                </Text>
            </View>
        );
     }
     
    
 }

 //Class
export function ProgressBar( props ) {
    return (
        <View style={ StyleProgressBar.little_spaceV }>
            <View style={ StyleProgressBar.whole_bar_steps }>
                <View 
                    style={[
                        StyleProgressBar.full_page,
                        StyleProgressBar.fixed_center
                    ]}
                >
                    <Number side='left' fill={ props }/>
                </View>
                <View 
                    style={[
                        StyleProgressBar.full_page,
                        StyleProgressBar.fixed_center
                    ]}
                >
                    <Number side='right' fill={ props }/>
                </View>
            </View>
            <View style={ StyleProgressBar.whole_bar }>
                <View 
                    style={[
                        StyleProgressBar.left_bar, 
                        StyleProgressBar.full_page,
                        StyleProgressBar.back_blood
                    ]}
                />
                <View 
                    style={[
                        StyleProgressBar.full_page, 
                        StyleProgressBar.right_bar,
                        props.fill == 2 ? StyleProgressBar.back_blood : StyleProgressBar.back_light
                    ]}
                />
            </View>
        </View>     
    );
}



 
const StyleProgressBar = StyleSheet.create({
    full_page: {
        flex: 1
    },
    little_spaceV: {
        paddingVertical: WIDTH * 0.02
    },
    fixed_center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    whole_bar: {
        height: HEIGHT * 0.01, 
        marginHorizontal: WIDTH * 0.1, 
        flexDirection: 'row'
    },
    left_bar: {
        borderTopLeftRadius: WIDTH * 0.01,
        borderBottomLeftRadius: WIDTH * 0.01
    },
    right_bar: {
        borderTopRightRadius: WIDTH * 0.01,
        borderBottomRightRadius: WIDTH * 0.01
    },
    whole_bar_steps:{
        height: HEIGHT * 0.07, 
        marginHorizontal: WIDTH * 0.1, 
        flexDirection: 'row'
    },
    txt: {
        fontSize: HEIGHT * 0.025
    },
    blood_txt: {
        color: '#fa4d09'
    },
    light_txt: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    border_blood: {
        borderColor: '#fa4d09'
    },
    border_light: {
        borderColor: 'rgba(255, 255, 255, 0.5)'
    },
    back_blood:{
        backgroundColor: '#fa4d09'
    },
    back_light:{
        backgroundColor: '#fff'
    },
    back_none:{
        backgroundColor: 'transparent'
    },

    //Number
    circle: {
        width: HEIGHT * 0.05, 
        height: HEIGHT * 0.05, 
        borderWidth: 2, 
        borderRadius: HEIGHT * 0.075        
    },
})


