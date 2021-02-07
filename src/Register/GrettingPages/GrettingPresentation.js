//Libraries
import
    React,
    {Component}
from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Platform,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { 
    Button, 
    Icon 
} from 'react-native-elements';

 //Constants
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height - (Platform.OS === 'ios' ? 40 : 0);

 export default class GrettingPresentation extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){

    }


   render() {
        return(
            <View style={StyleGrettingOne.sectionOne}>
                <View style={[ StyleGrettingOne.topTitleSection, StyleGrettingOne.fixed_center ]}>
                    <Text style={[ StyleGrettingOne.txt_light, StyleGrettingOne.txt_title_small  ]}>
                        Desarrolla todo
                    </Text>
                    <Text style={[ StyleGrettingOne.txt_blood, StyleGrettingOne.txt_title_big ]}>
                        tu POTENCIAL
                    </Text>
                    <Text style={[ StyleGrettingOne.txt_light, StyleGrettingOne.txt_title_small ]}>
                        dentro del equipo
                    </Text>
                    <Text style={StyleGrettingOne.txt_title_big}>
                        <Text style={StyleGrettingOne.txt_blood }>
                            ATOMIC
                        </Text>
                        <Text style={ StyleGrettingOne.txt_light }>
                            LABS
                        </Text>
                    </Text>                    
                </View>
                <View  style={[ StyleGrettingOne.scrollToDownSection, StyleGrettingOne.fixed_center ]}>
                    <TouchableOpacity 
                        onPress={()=> alert('go')} 
                        style={[StyleGrettingOne.touchToScroll, StyleGrettingOne.fixed_center]}
                    >
                        <Icon type='font-awesome' name='angle-down' color='#000'/>
                    </TouchableOpacity>
                    <Text style={[StyleGrettingOne.txt_normal, StyleGrettingOne.txt_light]}>
                        Quiero saber más
                    </Text>
                </View>
                <View style={[StyleGrettingOne.imageTopSection, StyleGrettingOne.fixed_center]}>
                    <Image
                        source={require('../../../img/gretting1.png')}
                        style={StyleGrettingOne.imgTop}
                    />
                </View>
                <View style={[StyleGrettingOne.goToRegisterSection, StyleGrettingOne.fixed_center]}>
                    <Button
                        title='¡Quiero ser parte!'
                        buttonStyle={StyleGrettingOne.btn}
                        titleStyle={StyleGrettingOne.txt_btn}
                        onPress={() => this.props.navigation.navigate('DataAccount')}
                    />
                </View>
            </View>
        );
   }
}


 
const StyleGrettingOne = StyleSheet.create({
    fixed_center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt_btn: {
        fontSize: WIDTH * 0.05,
        color: '#00609c'
    },
    txt_normal: {
        fontSize: 14
    },
    txt_title_big: {
        fontSize: WIDTH * 0.1,
        textAlign: 'center',
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold'
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
    sectionOne:{
        height: HEIGHT * 0.9,
    },
    topTitleSection: {
        flex: 3
    },
    scrollToDownSection: {
        flex: 1
    },
    touchToScroll: {
        height: HEIGHT * 0.050,
        width: HEIGHT * 0.050,
        backgroundColor: '#fff',
        borderRadius: HEIGHT * 0.0375,
        marginBottom: HEIGHT * 0.015
    },
    imageTopSection: {
        flex: 4       
    },
    goToRegisterSection: {
        flex: 1
    },
    btn: {
        backgroundColor: '#fff',
        height: HEIGHT * 0.065,
        width: WIDTH * 0.5,
        borderRadius: 10
    },
    imgTop: {
        resizeMode: 'contain',
        height: '85%'
    }
})


