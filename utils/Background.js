//Libraries
import
    React,
    {Component}
from 'react'
import {
    SafeAreaView,
    ImageBackground
} from 'react-native'

 // Style
 import { StyleBackground } from '../styles/StyleBackground'

 //Class
export default class Background extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }


   render() {
       const {children} = this.props;
       return (
            <ImageBackground
                source={require('../img/background.png')}
                style={StyleBackground.container}
            >
                <SafeAreaView style={StyleBackground.container}>
                     {children}
                 </SafeAreaView>
            </ImageBackground>

       );

   }
}
