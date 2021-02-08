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
    SafeAreaView,
    Alert
} from 'react-native'
import { Input, Button } from 'react-native-elements'
import NetInfo from "@react-native-community/netinfo";
import { CommonActions } from '@react-navigation/native';

//API
import { sendTest } from '../../serivces/api'

//Utils
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { TopBar } from '../../components/TopBar'

//Components
import { ProgressBar } from '../../components/ProgressBar'

 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height;
 let INTENTS = 0;

 //Class
export default class DataPhone extends Component {

    constructor( props ) {
        super( props );
        this.state = { 
            firstname: this.props.route.params.name,
            lastname: this.props.route.params.last_name,
            phone: '',
            error_phone: ''
         }
    }

    componentDidMount(){
        NetInfo.fetch().then(state => {
            this.setState({ isConnected: state.isConnected });
        });
        NetInfo.addEventListener(state => {
            this.setState({ isConnected: state.isConnected });
        });
    }

    _sendInfo = () => {
        if( this.state.isConnected ) {
            sendTest(
                this.state.firstname,
                this.state.lastname,
                this.state.phone
            )
            .then(( res ) => {
                if( res.success ) {
                    INTENTS = 0;
                    this.props.navigation.navigate( 'SignSuccess' );
                }else{                    
                    if( INTENTS == 3 ) {
                        Alert.alert(
                            "LO SENTIMOS",
                            "No se ha logrado la comunicación con el servidor, te invitamos a intentarlo mas tarde.",
                            [
                                { 
                                    text: "VOLVER A INTENTARLO",
                                    onPress: ()=> this.props.navigation.dispatch(
                                        CommonActions.reset({
                                          index: 1,
                                          routes: [
                                            { name: 'Gretting' },
                                          ],
                                        })
                                    )
                                }
                            ],
                            { 
                                cancelable: false 
                            }
                        );
                    }else {
                        Alert.alert(
                            "LO SENTIMOS",
                            "No se ha logrado la comunicación con el servidor",
                            [
                                { 
                                    text: "VOLVER A INTENTARLO"
                                }
                            ],
                            { 
                                cancelable: false 
                            }
                        );
                    }
                }
            })
            .catch(( e ) => {
                //TODO prepare exeptions management
            })
        }else {
            Alert.alert(
                "ADVERTENCIA",
                "Revisa tu conexión a internet",
                [
                    { 
                        text: "OK" 
                    }
                ],
                { 
                    cancelable: false 
                }
            );
        }
    }


   render() {
       return (
            <SafeAreaView style={ StyleDataPhone.full_page }>
                <TopBar/>
                <ScrollView 
                    contentContainerStyle={ StyleDataPhone.container } 
                    showsVerticalScrollIndicator={ false }
                    keyboardShouldPersistTaps='handled'
                >
                    <ImageBackground
                        source={ require( '../../img/backOne.png' ) }
                        style={ StyleDataPhone.imgBackLLarge }
                        imageStyle={ StyleDataPhone.imgBack }
                    >
                        <Header/>
                        <View style={[ StyleDataPhone.full_page ]}>
                            <View style={[ StyleDataPhone.little_spaceV ]}>
                                <ProgressBar fill={ 2 }/> 
                                <View style={[ StyleDataPhone.row, StyleDataPhone.little_spaceV ]}>
                                    <View style={[ StyleDataPhone.full_page, StyleDataPhone.fixed_center ]}>
                                        <View style={[ StyleDataPhone.circle, StyleDataPhone.fixed_center ]}>
                                            <Text style={[ StyleDataPhone.txt_light, StyleDataPhone.txt_letter ]}>
                                                2
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={[ StyleDataPhone.fullThree_page ]}>
                                        <Text style={ StyleDataPhone.txt_letter }>
                                            <Text style={ StyleDataPhone.txt_light }>
                                                VALIDA TU{ '\n' }
                                            </Text>                                
                                            <Text style={ StyleDataPhone.txt_blood }>
                                                CELULAR
                                            </Text>                                        
                                        </Text>
                                    </View>
                                </View>  
                                <View style={[ StyleDataPhone.little_spaceV, StyleDataPhone.little_space ]}>
                                    <Text style={[ StyleDataPhone.txt_light, StyleDataPhone.txt_normal ]}>
                                        Necesitamos validar tu número para continuar.{ '\n' }{ '\n' }
                                        Ingresa tu número a 10 dígitos y te enviaremos un códigoSMS.
                                    </Text>
                                </View>  
                                <View style={[ StyleDataPhone.little_space, StyleDataPhone.little_spaceV ]}>
                                    <View style={[ StyleDataPhone.little_spaceV ]}>
                                        <Text style={[ StyleDataPhone.txt_light, StyleDataPhone.txt_normal ]}>
                                            Número de teléfono
                                        </Text>
                                        <Input
                                            rightIcon={{ type: 'font-awesome', name: 'lock' }}
                                            keyboardType='numeric'
                                            returnKeyType='done'
                                            maxLength={ 10 }
                                            containerStyle={[
                                                StyleDataPhone.inputContainerStyle,
                                                StyleDataPhone.little_spaceV,
                                                { 
                                                    borderColor: 'red', 
                                                    borderWidth: this.state.error_phone != '' ? 2 : 0
                                                }
                                            ]}
                                            inputContainerStyle={ StyleDataPhone.quitBottomLine }
                                            onChangeText={
                                                value => this.setState({ phone: value.replace(/[^0-9]/g, ''), error_phone: '' })
                                            }
                                            errorStyle={ StyleDataPhone.errorRed }
                                            errorMessage={ this.state.error_phone }
                                            value={ this.state.phone }
                                        />
                                    </View>
                                </View> 
                                <View 
                                    style={[
                                        StyleDataPhone.little_space, 
                                        StyleDataPhone.little_spaceV,
                                        StyleDataPhone.fixed_center
                                    ]}
                                >
                                    <Button                                        
                                        title='ENVIAR'
                                        buttonStyle={ StyleDataPhone.btn }
                                        onPress={ ()=> this._sendInfo() }
                                        disabledStyle={ StyleDataPhone.disabled_btn }
                                        disabled={ this.state.phone.length < 10 }
                                    />
                                </View>
                            </View> 
                            <View style={[ StyleDataPhone.full_page, StyleDataPhone.fixed_center ]}> 
                            <Image
                                    source={ require( '../../img/phone.png' ) }
                                    style={ StyleDataPhone.imgTop }
                                />
                            </View>
                        </View>                         
                    </ImageBackground>
                    <Footer/>
                </ScrollView>
           </SafeAreaView>
       );

   }
}


const StyleDataPhone = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    little_space: {
        marginHorizontal: WIDTH * 0.025
    },
    little_spaceV: {
        marginVertical: WIDTH * 0.025
    },
    full_page:{
        flex: 1
    },
    fullTwo_page:{
        flex: 2
    },
    fullThree_page:{
        flex: 3
    },
    txt_normal: {
        fontSize: HEIGHT * 0.025
    },
    txt_letter: {
        fontSize: WIDTH * 0.07,
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
        flex: 1
    },
    bottomImg: {
        height: HEIGHT * 0.5
    },
    imgTop: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
    },
    imgBackLLarge: {
        height : HEIGHT * 1.4
    },
    imgBack: {
        resizeMode:'cover', 
        height: '100%',
        transform: [
            { scaleX: 2 }, 
            { scaleY: 1.2 }, 
            { translateX: WIDTH * 0.2 }, 
        ]
    },

    //Number
    circle: {
        width: HEIGHT * 0.06, 
        height: HEIGHT * 0.06, 
        borderWidth: 2, 
        borderRadius: HEIGHT * 0.05,
        borderColor:'#fa4d09',
        backgroundColor:'#fa4d09'
    },
    row: {
        flexDirection: 'row'
    },
    toLeft: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },


    //Input
    inputContainerStyle: {
        backgroundColor: '#fff', 
        height: 50, 
        borderRadius: 10 
    },
    quitBottomLine: {
        borderBottomWidth: 0
    },
    errorRed: {
        color: 'red'
    },

    //Button
    btn:{
        width: WIDTH * 0.5, 
        backgroundColor: '#fa4d09', 
        height: 50, 
        borderRadius: 25
    },
    disabled_btn: {
        width: WIDTH * 0.5, 
        backgroundColor: 'rgba(250, 77, 9, 0.5)', 
        height: 50, 
        borderRadius: 25
    }
})