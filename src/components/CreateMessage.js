import React, {Component} from 'react';

class CreateMessage extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <form className="create-message">
                    <div className="row">
                        <span className="">
                            <label for="message" className="font">Create Message</label>
                            <textarea 
                                id="message"
                                placeholder="Type Message Here" 
                                cols="70"
                                rows="6"
                                class="form-control"
                                onChange={(e)=>this.props.handleMessageChange(e)}
                                value={this.props.messageValue}>
                            </textarea>
                            {/* <mojiPicker onEmojiClick={myCallback}/>*/}
                            <button className="btn btn-primary send-message" width="300" onClick={(e)=>this.props.createMessage(e)}>
                                Send Message
                            </button>
                        </span>
                    </div>
                </form>
            )
        }
    };

export default CreateMessage