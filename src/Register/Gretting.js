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
    Platform,
    ActivityIndicator
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

//Utils
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { TopBar } from '../../components/TopBar'

//Greeting pages
import GrettingMeet from './GrettingPages/GrettingMeet'
import GrettingTutorial from './GrettingPages/GrettingTutorial'
import GrettingPeople from './GrettingPages/GrettingPeople'

//API
import { peopleTeam } from '../../serivces/api'
import { tan } from 'react-native-reanimated';

//Utils
import { renderIf } from '../../utils/Functions';
import { SafeAreaView } from 'react-native-safe-area-context';

 //Constants
 const WIDTH = Dimensions.get('window').width;
 const HEIGHT = Dimensions.get('window').height;

 //Class
export default class Gretting extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isConnected: true,
            team: []
        }
    }

    componentDidMount(){
        NetInfo.fetch().then(state => {
            this.setState({ isConnected: state.isConnected });
        });
        NetInfo.addEventListener(state => {
            this.setState({ isConnected: state.isConnected });
        });
        this._fetchData();
    }

    _fetchData(){
        let ux_team = [],
            front_team = [],
            back_team = [],
            whole_team = [];
        if(this.state.isConnected){
            peopleTeam()
            .then((team)=>{
                if(team){
                    team.map((member)=>{
                        switch(member.area){
                            case 'UX Designer':
                                ux_team.push(member);
                            break;
                            case 'Front-end developer':
                                front_team.push(member);
                            break;
                            case 'Back-end developer':
                                back_team.push(member);
                            break;
                        }
                    })
                    whole_team.push(
                        { id: 'ux', members: ux_team }, 
                        { id: 'front', members: front_team }, 
                        { id: 'back', members: back_team }
                    );
                    this.setState({
                        team: whole_team
                    })
                }

            })
            .catch((e)=>{
                //
            })
        }else{
            Alert.alert(
                "ADVERTENCIA",
                "Revisa tu conexión a internet",
                [
                    { 
                        text: "OK" 
                    }
                ],
                { 
                    cancelable: false 
                }
            );
        }
    }


   render() {
       return (
            <SafeAreaView style={StyleGretting.full_page}>
                <TopBar/>
                <ScrollView 
                    contentContainerStyle={StyleGretting.container} 
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={StyleGretting.full_page}>
                        <Header/>
                        
                        <GrettingMeet navigation={this.props.navigation}/>

                        <GrettingTutorial/>

                        {renderIf(this.state.team.length > 0,
                            <GrettingPeople navigation={this.props.navigation} team={this.state.team}/>
                        )}
                        {renderIf(this.state.team.length == 0,
                            <ActivityIndicator/>
                        )}
                        
                        <Footer/>
                    </View>
                   
                </ScrollView>
                
           </SafeAreaView>
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


