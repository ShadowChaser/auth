import React, {Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  state= { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAh4C7nlrT9o4EMaIApEH749j_xoKh16g0',
        authDomain: 'authentication-82409.firebaseapp.com',
        databaseURL: 'https://authentication-82409.firebaseio.com' ,
        projectId: 'authentication-82409',
        storageBucket: 'authentication-82409.appspot.com',
        messagingSenderId: '1006267421309'
    });

    firebase.auth().onAuthStateChanged ((user) => {
        
     if (user) {
       this.setState({loggedIn:true});
     }
     else{
       this.setState({ loggedIn:false});
     }

                }                      );
                                                   }                         

  renderContent()
  {
   switch (this.state.loggedIn)
   {
     case true:
            return( 
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out 
            </Button>);
     case false:
     return <LoginForm />;
    default:
    return <Spinner size="large" />
   }
   
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}


export default App;
