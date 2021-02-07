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
    StatusBar
} from 'react-native'


 //Constants
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height - (Platform.OS === 'ios' ? 40 : 0);

 //Class
export default class GrettingPeople extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){

    }


   render() {
       return (
            <View style={StyleGretting.container}>
                
           </View>
       );

   }
}



 
const StyleGretting = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginBottom: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    },
    full_page:{
        flex: 1,
        backgroundColor: '#000'
    }
})