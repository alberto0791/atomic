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
    Platform
} from 'react-native'

//Utils
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { TopBar } from '../../components/TopBar'

//Greeting pages
import GrettingPresentation from './GrettingPages/GrettingPresentation'
import GrettingTutorial from './GrettingPages/GrettingTutorial'
import GrettingPeople from './GrettingPages/GrettingPeople'

//API


 //Constants
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height - (Platform.OS === 'ios' ? 40 : 0);

 //Class
export default class Gretting extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){

    }


   render() {
       return (
            <View style={StyleGretting.container}>
                <TopBar/>
                <ScrollView 
                    contentContainerStyle={StyleGretting.container} 
                    showsVerticalScrollIndicator={false}
                >
                    <View style={StyleGretting.full_page}>
                        <Header/>
                        
                        <GrettingPresentation navigation={this.props.navigation}/>
                        <GrettingTutorial/>
                        <GrettingPeople navigation={this.props.navigation}/>

                        <Footer/>
                    </View>
                   
                </ScrollView>
                
           </View>
       );

   }
}



 
const StyleGretting = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    full_page:{
        flex: 1,
        backgroundColor: '#000'
    }
})


