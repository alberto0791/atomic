//Libraries
import
    React,
    {Component}
from 'react'
import {
    View, Text, Button
} from 'react-native'

 //Class
export default class DataAccount extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }


   render() {
       return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Data Account</Text>
            <Button
                title="Go to Data Phone"
                onPress={() => this.props.navigation.navigate('DataPhone')}
            />
        </View>

       );

   }
}