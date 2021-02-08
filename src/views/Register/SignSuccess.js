//Libraries
import
    React,
    { Component }
from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    Platform,
    ImageBackground,
    Text,
    Image,
    SafeAreaView
} from 'react-native'

//Utils
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { TopBar } from '../../components/TopBar'

 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height;

 //Class
export default class SignSuccess extends Component {

    constructor( props ) {
        super( props );
        this.state = { }
    }

   render() {
       return (
            <SafeAreaView style={ StyleSignSuccess.full_page }>
                <TopBar/>
                <ScrollView 
                    contentContainerStyle={ StyleSignSuccess.container } 
                    showsVerticalScrollIndicator={ false }
                    keyboardShouldPersistTaps='handled'
                >
                    <ImageBackground
                        source={ require( '../../img/backOne.png' ) }
                        style={ StyleSignSuccess.imgBackLLarge }
                        imageStyle={ StyleSignSuccess.imgBack }
                    >
                        <Header/>
                        <View style={[ StyleSignSuccess.topTitleSection, StyleSignSuccess.fixed_center ]}>
                            <Text style={ StyleSignSuccess.txt_title_small }>
                                <Text style={ StyleSignSuccess.txt_light }>
                                    TUS DATOS{ '\n' }
                                    HAN SIDO{ ' ' }
                                </Text>                                
                                <Text style={ StyleSignSuccess.txt_blood }>
                                    ENVIADOS { '\n' }
                                    CON ÉXITO
                                </Text>
                                
                            </Text>                    
                        </View>
                        <View style={[ StyleSignSuccess.topTitleSection, StyleSignSuccess.fixed_center, StyleSignSuccess.little_space ]}>
                            <Text style={[ StyleSignSuccess.txt_light, StyleSignSuccess.txt_normal ]}>
                                En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs. {'\n'}{'\n'}
                                Recuerda revisar tu bandeja de SPAM{'\n'}
                                ¡Esperamos verte pronto!
                            </Text>                   
                        </View>
                        <View style={[ StyleSignSuccess.ImageSection, StyleSignSuccess.fixed_center ]}>
                            <Image
                                source={ require( '../../img/signsuccess.png' ) }
                                style={ StyleSignSuccess.imgTop }
                            />              
                        </View>
                    </ImageBackground>
                    <Footer/>
                </ScrollView>
           </SafeAreaView>
       );

   }
}


const StyleSignSuccess = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    little_space: {
        paddingHorizontal: WIDTH * 0.025
    },
    full_page:{
        flex: 1
    },
    txt_normal: {
        fontSize: 16
    },
    txt_title_small: {
        fontSize: WIDTH * 0.075,
        textAlign: 'center',
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold'
    },
    txt_light: {
        color: '#fff'
    },
    txt_blood: {
        color:'#fa4d09'
    },
    fixed_center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    topTitleSection: {
        flex: 1,
    },
    ImageSection: {
        flex: 3
    },
    imgTop: {
        resizeMode: 'contain',
        height: '95%'
    },
    imgBackLLarge: {
        height : HEIGHT * 1
    },
    imgBack: {
        resizeMode:'cover', 
        height: '100%',
        transform: [
            { scaleX: 1.9 }, 
            { scaleY: 1.2 }, 
            { translateX: WIDTH * 0.2 }
        ]
    },
})

