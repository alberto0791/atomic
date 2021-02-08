//Libraries
import
    React,
    {Component}
from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native'

 //Constants
 const HEIGHT = Dimensions.get('window').height;

 //Class
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }


   render() {
       return (
        <View 
            style={[
                StyleHeader.container, 
                StyleHeader.iOS_statusBar,
                StyleHeader.fixed_center
            ]}
        >
            <Image
                style={StyleHeader.img}
                source={require('../img/top-img.webp')}
            />
        </View>
       );

   }
}



const StyleHeader = StyleSheet.create({
    container: {
        height: HEIGHT * 0.1
    },
    fixed_center:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'contain',
        height: '70%'
    }
})


