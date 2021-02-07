//Libraries
import
    React,
    {Component}
from 'react'
import {
    View, Text, Button
} from 'react-native'

 //Class
export default class DataPhone extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }


   render() {
       return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Data Phone</Text>
            <Button
                title="Go to Sign Success"
                onPress={() => this.props.navigation.navigate('SignSuccess')}
            />
        </View>

       );

   }
}