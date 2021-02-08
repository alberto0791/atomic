//Libraries
import
    React,
    { Component }
from 'react'
import {
    View,
    Dimensions,
    Text,
    StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'

 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height;

 //Class
export default class Footer extends Component {

    constructor( props ) {
        super( props );
        this.state = { }
    }


   render() {
       return (
        <View style={ StyleFooter.container }>
            <View style={ StyleFooter.row }>
                <Text style={ StyleFooter.txt }>
                    2020 Atomic Labs. Todos los derechos reservados.
                </Text>
            </View>
            <View style={ StyleFooter.row }>
                <Text style={[ StyleFooter.txt, StyleFooter.underline_txt ]}>
                    Aviso de privacidad
                </Text>
            </View>
            <View style={[ StyleFooter.row, StyleFooter.horizontal_row ]}>
                <Icon 
                    type='font-awesome' 
                    name='linkedin' 
                    color='#fff' 
                    style={ StyleFooter.space_socialMedia }
                />
                <Icon 
                    type='font-awesome' 
                    name='twitter' 
                    color='#fff' 
                    style={ StyleFooter.space_socialMedia }
                />
            </View>
        </View>
       );

   }
}



const StyleFooter = StyleSheet.create({
    container: {
        height: HEIGHT * 0.2, 
        backgroundColor: '#000'
    },
    row: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    txt: {
        fontSize: 14,
        color: '#fff'
    },
    underline_txt: {
        textDecorationLine:'underline'
    },
    horizontal_row: {
        flexDirection: 'row'
    },
    space_socialMedia: {
        marginHorizontal: WIDTH * 0.015
    }
})


