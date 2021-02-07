//Libraries
import
    React,
    {Component}
from 'react'
import {
    View, Text, Button
} from 'react-native';
import { StackActions } from '@react-navigation/native';

 //Class
export default class SignSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = { }
    }


   render() {
       return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign Success</Text>
            <Button
                title="Go to Gretting"
                onPress={() => this.props.navigation.dispatch(StackActions.popToTop())}
            />
        </View>

       );

   }
}