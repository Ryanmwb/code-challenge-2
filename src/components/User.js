import React, {Component} from 'react';

class User extends Component {
    constructor(props){
        super(props)
        this.state={
            signInOrOut: null,
        }
    }

    componentDidMount(){
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
          });
    }

    signIn(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
        this.setState({signInOrOut: "Sign Out"})
        console.log("sign in")
    }

    signOut(){
        this.props.firebase.auth().signOut();
        this.setState({signInOrOut: "Sign In"})
        console.log("sign out")
        console.log(this.props.user)
    }

    render(){
        return(
            <div className="user">
                <h2 className="font">User: { this.props.user === null ? "Guest" : this.props.user.displayName } </h2>
                <button type="button" class="btn btn-light user-button" onClick={ this.props.user !== null ? this.signOut.bind(this) : this.signIn.bind(this)}>{ this.props.user !== null ? "Sign Out" : "Sign In" }</button>
            </div>
        )
    }
};

export default User