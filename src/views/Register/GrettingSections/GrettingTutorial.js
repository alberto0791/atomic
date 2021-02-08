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
    Text,
    Image
} from 'react-native'
import 
    Carousel, 
    { Pagination } 
from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements'

 //Constants
 const WIDTH = Dimensions.get( 'window' ).width;
 const HEIGHT = Dimensions.get( 'window' ).height
 const SLIDER_WIDTH = WIDTH * 0.9;

 //Class
export default class GrettingTutorial extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    id: 1,
                    title: 'IMAGINA',
                    img: require('../../../img/tutorial1.png'),
                    txt: [
                        { message: 'Estrategia digital' },
                        { message: 'BigData & Analysis' },
                        { message: 'Consultoría Tecnológica' },
                        { message: 'Reducción de costos TI' }
                    ]
                },
                {
                    id: 2,
                    title: 'EXPLORA',
                    img: require('../../../img/tutorial2.png'),
                    txt: [
                        { message: 'Innovación y creación tecnológica' },
                        { message: 'UI / UX' },
                        { message: 'Innovación' },
                    ]
                },
                {
                    id: 3,
                    title: 'CONQUISTA',
                    img: require('../../../img/tutorial3.png'),
                    txt: [
                        { message: 'Desarrollo tecnológico y creación tecnológica' },
                        { message: 'Ciberseguridad' },
                        { message: 'Servicios en la nube' },
                    ]
                }
            ]
         }
    }

    _renderTxt( txt ){
        return txt.map(( e, i ) => {
            return (
                <View style={[ StyleGrettingTut.tutorial_row, StyleGrettingTut.litle_space ]} key={ i }>
                    <Icon type='font-awesome' name='circle' size={10} color='#fff'/>
                    <Text style={[ StyleGrettingTut.txt_light, StyleGrettingTut.txt_normal ]}>
                        {'    ' + e.message}
                    </Text>
                </View>
            )
        }) 
    }

    _renderItem({item,index}){
        return (
            <View style={[ StyleGrettingTut.full_page, StyleGrettingTut.backPageTutorial ]} key={ index }>
                <View style={[ StyleGrettingTut.full_page, StyleGrettingTut.fixed_center ]}>
                    <Image
                        source={ item.img }
                        style={ StyleGrettingTut.tutorial_img }
                    />
                    <View style={[ StyleGrettingTut.fixed_center,  StyleGrettingTut.tutorial_row ]}>
                        <View style={[ StyleGrettingTut.line_division, StyleGrettingTut.large_line_division ]}/>
                        <View style={[ StyleGrettingTut.line_division, StyleGrettingTut.small_line_division ]}/>
                        <View style={[ StyleGrettingTut.line_division, StyleGrettingTut.large_line_division ]}/>
                    </View>
                </View>              
                <View style={ StyleGrettingTut.two_page }>
                    <View style={[ StyleGrettingTut.litle_space, StyleGrettingTut.fixed_center ]}>
                        <Text style={[ StyleGrettingTut.txt_light, StyleGrettingTut.txt_title_small ]}>
                            {item.title}
                        </Text>
                    </View>                    
                    <View style={[ StyleGrettingTut.full_page, StyleGrettingTut.big_space ]}>
                        { this._renderTxt(item.txt) }
                    </View>
                </View>
            </View>

        )
    }

    get paginationItem () {
        return (
            <Pagination
                dotsLength={ this.state.carouselItems.length }
                activeDotIndex={ this.state.activeIndex }
                containerStyle={ StyleGrettingTut.backPagination }
                dotStyle={ StyleGrettingTut.dotAppearance }
                inactiveDotOpacity={ 0.4 }
                inactiveDotScale={ 0.6 }
            />
        );
    }



   render() {
       return (
            <View style={StyleGrettingTut.sectionTwo}>
                <View style={[StyleGrettingTut.TitleSection, StyleGrettingTut.fixed_center]}>
                    <Text style={StyleGrettingTut.txt_title_small}>
                        <Text style={StyleGrettingTut.txt_light}>SOMOS EL BRAZO</Text>{'\n'}
                        <Text style={StyleGrettingTut.txt_light}>DERECHO </Text>
                        <Text style={StyleGrettingTut.txt_blood}>DE LA</Text>{'\n'}
                        <Text style={StyleGrettingTut.txt_blood}>TECNOLOGÍA</Text>
                    </Text>
                </View>
                <View style={[ StyleGrettingTut.carouselSection, StyleGrettingTut.fixed_center ]}>
                    <Carousel
                        layout={ "tinder" }
                        ref={ ref => this.carousel = ref }
                        data={ this.state.carouselItems }
                        sliderWidth={ SLIDER_WIDTH }
                        itemWidth={ SLIDER_WIDTH }
                        renderItem={ this._renderItem.bind(this) }
                        onSnapToItem = { index => this.setState({ activeIndex:index }) } 
                    />
                     { this.paginationItem }
                    </View>
                <View style={[StyleGrettingTut.TitleSection, StyleGrettingTut.fixed_center ]}>
                    <Text style={ StyleGrettingTut.txt_title_small }>
                        <Text style={ StyleGrettingTut.txt_light }>¡TE ENCANTARÁ</Text>{'\n'}
                        <Text style={ StyleGrettingTut.txt_blood }>TRABAJAR CON</Text>{'\n'}
                        <Text style={ StyleGrettingTut.txt_blood }>NOSOTROS!</Text>
                    </Text>
                </View>
            </View>
       );

   }
}

const StyleGrettingTut = StyleSheet.create({
    full_page: {
        flex: 1
    },
    two_page: {
        flex: 2
    },
    litle_space: {
        padding: WIDTH * 0.025
    },
    big_space: {
        paddingHorizontal: WIDTH * 0.1
    },
    fixed_center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt_btn: {
        fontSize: WIDTH * 0.05,
        color: '#00609c'
    },
    txt_normal: {
        fontSize: 18
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

    sectionTwo:{
        height: (HEIGHT + 20) * 1.1
    },
    TitleSection: {
        flex: 2
    },
    carouselSection: {
        flex: 7
    },
    dotAppearance:{
        width: WIDTH * 0.05,
        height: WIDTH * 0.05,
        borderRadius: WIDTH * 0.025,
        backgroundColor: '#fa4d09'
    },
    backPageTutorial: {
        backgroundColor: '#fa4d09',
        borderRadius: 10
    },
    line_division: {
        height: HEIGHT * 0.005, 
        backgroundColor: '#fff', 
        marginHorizontal: WIDTH * 0.01
    },
    large_line_division: {
        width: WIDTH * 0.15
    },
    small_line_division: {
        width: WIDTH * 0.025
    },
    tutorial_img:{
        resizeMode:'contain', 
        height: '100%'
    },
    tutorial_row: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    backPagination:{
        backgroundColor: 'transparent'
    }
})
