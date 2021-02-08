
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
import { Input, Button } from 'react-native-elements'

//Utils
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { TopBar } from '../../components/TopBar'

//Components
import { ProgressBar } from '../../components/ProgressBar'

 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height;

 //Class
export default class DataAccount extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            step: 1,
            name: '',
            last_name: '',
            error_name: ''
        }
    }

    _checkFileds = () => {
        if(this.state.name != '' && this.state.last_name != '') {
            if( this.state.name.length < 5 ) {
                this.setState({
                    error_name: 'El nombre debe tener mínimo 5 caracteres'
                })
            }else {
                this.props.navigation.navigate('DataPhone', { name: this.state.name, last_name: this.state.last_name })
            }
        }
    }


   render() {
       return (
            <SafeAreaView style={ StyleDataAccount.full_page }>
                <TopBar/>
                <ScrollView 
                    contentContainerStyle={ StyleDataAccount.container } 
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                >
                    <ImageBackground
                        source={ require( '../../img/backOne.png' ) }
                        style={ StyleDataAccount.imgBackLLarge }
                        imageStyle={ StyleDataAccount.imgBack }
                    >
                        <Header/>
                        <View style={[ StyleDataAccount.little_spaceV ]}>
                            <ProgressBar fill={ 1 }/>
                            <View style={[ StyleDataAccount.row, StyleDataAccount.little_spaceV ]}>
                                <View style={[ StyleDataAccount.full_page, StyleDataAccount.toLeft ]}>
                                    <View style={[ StyleDataAccount.circle, StyleDataAccount.fixed_center ]}>
                                        <Text style={[ StyleDataAccount.txt_light, StyleDataAccount.txt_letter ]}>
                                            1
                                        </Text>
                                    </View>
                                </View>
                                <View style={[ StyleDataAccount.fullThree_page, StyleDataAccount.fixed_center ]}>
                                    <Text style={ StyleDataAccount.txt_letter }>
                                        <Text style={ StyleDataAccount.txt_light }>
                                            TE QUEREMOS {'\n'}
                                        </Text>                                
                                        <Text style={ StyleDataAccount.txt_blood }>
                                            CONOCER
                                        </Text>                                        
                                    </Text>
                                </View>
                            </View>
                            
                            <View style={[ StyleDataAccount.little_spaceV, StyleDataAccount.little_space ]}>
                                <Text style={[ StyleDataAccount.txt_light, StyleDataAccount.txt_normal ]}>
                                    Queremos saber si eres tu, por favor {'\n'} ingresa los siguintes datos:
                                </Text>
                            </View>
                            
                            <View style={[ StyleDataAccount.little_space, StyleDataAccount.little_spaceV ]}>
                                <View style={[ StyleDataAccount.little_spaceV]}>
                                    <Text style={[ StyleDataAccount.txt_light, StyleDataAccount.txt_normal ]}>
                                        Nombre(s)
                                    </Text>
                                    <Input
                                        rightIcon={{ type: 'font-awesome', name: 'lock' }}
                                        containerStyle={[
                                            StyleDataAccount.inputContainerStyle,
                                            StyleDataAccount.little_spaceV,
                                            { 
                                                borderColor: 'red', 
                                                borderWidth: this.state.error_name != '' ? 2 : 0
                                            }
                                        ]}
                                        inputContainerStyle={StyleDataAccount.quitBottomLine}
                                        onChangeText={
                                            value => this.setState({ name: value, error_name: '' })
                                        }
                                        errorStyle={ StyleDataAccount.errorRed }
                                        errorMessage={ this.state.error_name }
                                    />
                                </View>
                                <View style={[ StyleDataAccount.little_spaceV ]}>
                                    <Text style={[ StyleDataAccount.txt_light, StyleDataAccount.txt_normal ]}>
                                        Apellidos
                                    </Text>
                                    <Input
                                        rightIcon={{ type: 'font-awesome', name: 'lock' }}
                                        containerStyle={[
                                            StyleDataAccount.inputContainerStyle, 
                                            StyleDataAccount.little_spaceV
                                        ]}
                                        inputContainerStyle={ StyleDataAccount.quitBottomLine }
                                        onChangeText={
                                            value => this.setState({ last_name: value, error_last_name: '' })
                                        }
                                        errorStyle={ StyleDataAccount.errorRed }
                                        errorMessage={ this.state.error_last_name }
                                    />
                                </View>
                            </View>

                            <View 
                                style={[
                                    StyleDataAccount.little_space, 
                                    StyleDataAccount.little_spaceV, 
                                    StyleDataAccount.fixed_center
                                ]}
                            >
                                <Button                                        
                                    title='ENVIAR'
                                    buttonStyle={ StyleDataAccount.btn }
                                    onPress={ ()=> this._checkFileds() }
                                    disabledStyle={ StyleDataAccount.disabled_btn }
                                    disabled={ this.state.name == '' || this.state.last_name == '' }
                                />
                            </View>
                        </View>
                        <View style={[ StyleDataAccount.ImageSection, StyleDataAccount.fixed_center ]}>
                            <Image
                                source={ require( '../../img/account.png' ) }
                                style={ StyleDataAccount.imgTop }
                            />              
                        </View>
                    </ImageBackground>
                    <Footer/>
                </ScrollView>
           </SafeAreaView>
       );

   }
}



 
const StyleDataAccount = StyleSheet.create({
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
    ImageSection: {
        flex: 1
    },
    imgTop: {
        resizeMode: 'contain',
        height: '95%'
    },
    imgBack: {
        resizeMode:'cover', 
        height: '100%',
        transform: [
            { scaleX: 1.8 }, 
            { scaleY: 1.5 }, 
            { translateX: WIDTH * 0.2 }, 
            { translateY: -(WIDTH * 0.2) }
        ]
    },
    imgBackLLarge: {
        height : HEIGHT * 1.5
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


