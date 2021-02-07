//Libraries
import
    React,
    {Component}
from 'react'
import {
    View, Text, Button
} from 'react-native'

 //Class
export default class Gretting extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }


   render() {
       return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Gretting</Text>
            <Button
                title="Go to Data Account"
                onPress={() => this.props.navigation.navigate('DataAccount')}
            />
        </View>

       );

   }
}
