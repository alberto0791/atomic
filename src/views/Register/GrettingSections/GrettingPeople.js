//Libraries
import
    React,
    { Component }
from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Platform,
    Image,
    Text,
    FlatList
} from 'react-native'
import { 
    Button, 
    Avatar 
} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height;
 const SLIDER_WIDTH = WIDTH * 0.8;

 //Class
export default class GrettingPeople extends Component {

    constructor( props ) {
        super( props );
        this.state = { }
    }

    Capitalize(str){
        let words = str.split(" ");
        
        for( let i = 0; i < words.length; i++ ) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    _renderCarousel({ item,index }){
        return (
            <View style={[ StyleGrettingPeople.full_page, StyleGrettingPeople.card ]} key={ index }>
                <View style={[ StyleGrettingPeople.fullTwo_page, StyleGrettingPeople.fixed_center ]}>
                    <Avatar
                        size="xlarge"
                        rounded
                        source={{ uri: item.photograph }}
                        activeOpacity={ 0.7 }
                    />
                </View>
                <View style={[ StyleGrettingPeople.full_page, StyleGrettingPeople.fixed_center ]}>
                    <Text style={[ StyleGrettingPeople.txt_name, StyleGrettingPeople.txt_light ]}>
                            { this.Capitalize(item.name) }
                    </Text>
                    <Text style={[ StyleGrettingPeople.txt_area, StyleGrettingPeople.txt_light ]}>
                        { item.area }
                    </Text>
                </View>
            </View>
        )
    }

    _renderItem = ({ item, index }) => (
        <View style={[ StyleGrettingPeople.carousel_container, StyleGrettingPeople.fixed_center ]} key={ index }>
            <Carousel
                layout="default"
                loop={ true }
                ref={ ref => this.carousel = ref }
                data={ item.members }
                sliderWidth={ WIDTH * 0.9 }
                itemWidth={ SLIDER_WIDTH }
                renderItem={ ( itemC, indexC )=>this._renderCarousel( itemC, indexC )}
                horizontal={ true }
            />
        </View>
    );

   render() {
       return (
            <View style={StyleGrettingPeople.full_page}>
                <View style={ StyleGrettingPeople.half_device }>
                    <View style={[ StyleGrettingPeople.imageTopSection, StyleGrettingPeople.fixed_center ]}>
                        <Image
                            source={require('../../../img/people_group.png')}
                            style={ StyleGrettingPeople.imgTop }
                        />
                    </View>
                    <View style={[ StyleGrettingPeople.goToRegisterSection, StyleGrettingPeople.fixed_center ]}>
                        <Button
                            title='¡Quiero ser parte!'
                            buttonStyle={ StyleGrettingPeople.btn }
                            titleStyle={ StyleGrettingPeople.txt_btn }
                            onPress={() => this.props.navigation.navigate( 'DataAccount' )}
                        />
                    </View>
                    <View style={[ StyleGrettingPeople.goToRegisterSection, StyleGrettingPeople.fixed_center ]}>
                        <Text style={ StyleGrettingPeople.txt_title_small }>
                            <Text style={ StyleGrettingPeople.txt_light }>
                                NUESTRO{' '}
                            </Text>
                            <Text style={ StyleGrettingPeople.txt_blood }>
                                EQUIPO
                            </Text>
                        </Text>
                    </View>                    
                </View>
                <View style={[ StyleGrettingPeople.flatlist_container, StyleGrettingPeople.fixed_center ]}>
                    <FlatList
                        horizontal={ false }
                        data={ this.props.team }
                        renderItem={( item, index )=>this._renderItem( item, index )}
                    />
                </View>
                
                
           </View>
       );

   }
}


const StyleGrettingPeople = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    little_space:{
        padding: WIDTH * 0.05
    },
    full_page:{
        flex: 1
    },
    fullTwo_page:{
        flex: 2
    },
    fixed_center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#fff',
        height: HEIGHT * 0.065,
        width: WIDTH * 0.5,
        borderRadius: 10
    },
    txt_btn: {
        fontSize: WIDTH * 0.05,
        color: '#00609c'
    },
    imageTopSection: {
        flex: 2.5
    },
    goToRegisterSection: {
        flex: 1
    },
    imgTop: {
        resizeMode: 'contain',
        width: '100%'
    },
    txt_title_small: {
        fontSize: WIDTH * 0.075,
        textAlign: 'center',
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold'
    },
    txt_name: {
        fontSize: WIDTH * 0.05,
        textAlign: 'center',
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold'
    },
    txt_area: {
        fontSize: WIDTH * 0.04,
        textAlign: 'center'
    },
    txt_light: {
        color: '#fff'
    },
    txt_blood: {
        color:'#fa4d09'
    },
    card: {
        backgroundColor: '#00609c', 
        borderRadius: 10
    },
    carousel_container: {
        width: WIDTH * 1, 
        height: HEIGHT * 0.45, 
        marginVertical: HEIGHT * 0.015
    },
    half_device:{
        height: HEIGHT * 0.5
    },
    flatlist_container:{
        height: HEIGHT * 1.5
    }
})


