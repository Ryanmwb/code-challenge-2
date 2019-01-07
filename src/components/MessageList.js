import React, {Component} from 'react';
import CreateMessage from './CreateMessage';

class MessageList extends Component {
    constructor(props){
        super(props)
        this.messagesRef = this.props.firebase.database().ref('messages');
        this.state = {
            messages: [],
            newMessage: ''
        };
    }

    componentDidMount(){
        this.messagesRef.on('child_added', snapshot => {
            let message = snapshot.val();
            message.key = snapshot.key;
            this.setState({
                messages: this.state.messages.concat( message )
            });
        });
    }

    handleMessageChange(e){
        this.setState({newMessage: e.target.value})
        console.log(this.state.messages)
    }

    createMessage(e){
        e.preventDefault();
        console.log(this.props.currentRoom)
        this.messagesRef.push({
            username: this.props.user.displayName,
            content: this.state.newMessage,
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            roomId: this.props.currentRoom
        })
        console.log(this.state.messages)
        this.setState({newMessage: ''})
    }

    messageListTitle(){
        if(this.props.currentRoom){
            return <tr>
                <td className="messageListTitle">{this.props.currentRoomName}'s Messages</td>
            </tr>
        }
    }
    render() {
        return (
            <div className="message-list">
                <table className="table">
                    <tbody className="font">
                        {this.props.currentRoom ? (<tr>
                            <td className="message-list-title" colspan="3">{this.props.currentRoomName}'s Messages</td>
                            </tr>) : (<tr></tr>)
                        }
                        {this.state.messages.filter(message=>
                            message.roomId === this.props.currentRoom).map((message, index)=>
                                <tr className="messages table-row" key={message.key}>
                                    <td align="right">MESSAGE: {message.content} | </td>
                                    <td>DATE CREATED: {message.sentAt} | </td>
                                    <td align="left">USER: { message.username }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <CreateMessage 
                    handleMessageChange={(e)=>this.handleMessageChange(e)} 
                    createMessage={(e)=>this.createMessage(e)} 
                    messageValue={this.state.newMessage}
                />
            </div>
        )
    }
}

export default MessageList