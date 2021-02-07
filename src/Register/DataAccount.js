
//Libraries
import
    React,
    {Component}
from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    Platform,
    ImageBackground,
    Text,
    Image
} from 'react-native'

//Utils
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { TopBar } from '../../components/TopBar'

//API


 //Constants
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height - (Platform.OS === 'ios' ? 40 : 0);

 //Class
export default class DataAccount extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){

    }


   render() {
       return (
            <View style={StyleDataAccount.container}>
                <TopBar/>
                <ScrollView 
                    contentContainerStyle={StyleDataAccount.container} 
                    showsVerticalScrollIndicator={false}
                >
                    <ImageBackground
                        source={require('../../img/backOne.png')}
                        style={StyleDataAccount.imgBackLLarge}
                        imageStyle={StyleDataAccount.imgBack}
                    >
                        <Header/>
                        <View style={[ StyleDataAccount.topTitleSection, StyleDataAccount.fixed_center ]}>
                                         
                        </View>
                        <View style={[ StyleDataAccount.ImageSection, StyleDataAccount.fixed_center ]}>
                            <Image
                                source={require('../../img/account.png')}
                                style={StyleDataAccount.imgTop}
                            />              
                        </View>
                    </ImageBackground>
                    <Footer/>
                </ScrollView>
           </View>
       );

   }
}



 
const StyleDataAccount = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    little_space: {
        paddingHorizontal: WIDTH * 0.025
    },
    full_page:{
        flex: 1,
        backgroundColor: '#000'
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
})


