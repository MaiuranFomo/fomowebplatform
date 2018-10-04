import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

class SignIn extends Component {
    state = {
        isSignedin:false
    };
    uiConfig = {
        signinFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedin: !!user })
        })
    }

    
    
    render() {
        return (
            <div ClassName="App">
            {this.state.isSignedIn ? (
                <span>
                    <h1>SignedIn</h1>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h1> Welcome {firebase.auth().currentUser.displayName}</h1>
                </span>
            ) : (
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
            )}
            </div>
        )
  }
}

export default  SignIn
