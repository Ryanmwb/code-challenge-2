
import React, {Component} from 'react';
import './Components.css'

class CreateRoom extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <form className="create-room">
                    <div className="row">
                        <span className="">
                            <input 
                                type="text" 
                                className="form-control col" 
                                placeholder="Chat Room Name"  
                                onChange={this.props.handleNameChange}
                                value={this.props.chatRoomName}
                            />
                            <button type="button" className="col btn btn-success" onClick={this.props.createChatRoom}>
                                Create Chat Room
                            </button>
                        </span>
                    </div>
                </form>
            )
        }
    };

export default CreateRoom