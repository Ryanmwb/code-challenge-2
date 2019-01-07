import React, {Component} from 'react';
import CreateRoom from './CreateRoom'
import './Components.css'

class RoomList extends Component {
    constructor(props){
        super(props)
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.state = {
            rooms: [],
            chatRoomName: "",
        }
    };

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) });
        });
      }

    createChatRoom(e){
        e.preventDefault();
        let name = this.state.chatRoomName
        this.roomsRef.push({
            name: name
        })
        this.setState({chatRoomName: ''})
    }

    handleNameChange(e){
        this.setState({chatRoomName: e.target.value})
    }

    render() {
        return (
            <section className ="sidebar">
                <CreateRoom 
                    chatRoomName={this.state.chatRoomName} 
                    createChatRoom={(e) => this.createChatRoom(e)}
                    handleNameChange={(e)=>this.handleNameChange(e)}
                />
                {this.state.rooms.map( (room) =>
                    <div className="rooms" key={room.key}>
                        <li> 
                            <button
                                type="button" 
                                className="btn btn-info rooms-button" 
                                
                                onClick={() => this.props.changeCurrentRoom(room)}
                                >{room.name}
                            </button>
                        </li>
                    </div>
                )}
			</section>
        )
    }
}

export default RoomList;