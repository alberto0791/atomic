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
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height;

 export function Number(props) {
     if(props.side == 'left') {
        return(
            <View 
                style={[
                    StyleProgressBar.circle, 
                    StyleProgressBar.fixed_center, 
                    { 
                        borderColor: props.fill.fill == 1 ? '#fa4d09' : 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: props.fill.fill == 2 ? '#fa4d09' : 'transparent' 
                    }
                ]}
            >
                {renderIf(props.fill.fill == 2,
                    <Icon tipe='font-awesome' name='check' size={HEIGHT * 0.05} color='#fff'/>
                )}
                {renderIf(props.fill.fill != 2,
                    <Text style={[StyleProgressBar.txt, {color: '#fa4d09'}]}>1</Text>
                )}
                
            </View>
        );
     }else if(props.side == 'right'){
        return(
            <View 
                style={[
                    StyleProgressBar.circle, 
                    StyleProgressBar.fixed_center, 
                    { borderColor: props.fill.fill == 1 ? 'rgba(255, 255, 255, 0.5)' : '#fa4d09' }
                    ]}
            >
                <Text 
                    style={[
                        StyleProgressBar.txt,
                        {color: props.fill.fill == 1 ? 'rgba(255, 255, 255, 0.5)' : '#fa4d09'}
                    ]}
                >
                    2
                </Text>
            </View>
        );
     }
     
    
 }

 //Class
export function ProgressBar(props) {
    console.log(props)
    return (
        <View style={StyleProgressBar.little_spaceV}>
            <View style={StyleProgressBar.whole_bar_steps}>
                <View 
                    style={[
                        StyleProgressBar.full_page,
                        StyleProgressBar.fixed_center
                    ]}
                >
                    <Number side='left' fill={props}/>
                </View>
                <View 
                    style={[
                        StyleProgressBar.full_page,
                        StyleProgressBar.fixed_center
                    ]}
                >
                    <Number side='right' fill={props}/>
                </View>
            </View>
            <View style={StyleProgressBar.whole_bar}>
                <View 
                    style={[
                        StyleProgressBar.left_bar, 
                        StyleProgressBar.full_page,
                        { backgroundColor: '#fa4d09' }
                    ]}
                />
                <View 
                    style={[
                        StyleProgressBar.full_page, 
                        StyleProgressBar.right_bar,
                        { backgroundColor: props.fill == 2 ? '#fa4d09' : '#fff' }
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

    //Number
    circle: {
        width: HEIGHT * 0.05, 
        height: HEIGHT * 0.05, 
        borderWidth: 2, 
        borderRadius: HEIGHT * 0.075        
    }
})


