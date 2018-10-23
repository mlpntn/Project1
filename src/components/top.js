import React, { Component } from 'react';

class TopDiv extends Component {

    constructor(props) {
        super(props);

        //this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    render() {
        return (
            <div className="post-container">
            <center>
                <div className="credit">Credit
                <br></br>
                <input type="text" name="credit"/></div>
                <div  className="debit">Debit
                <br></br>
                <input type="text" name="debit"/>
                </div>                
                <div  className="balance">Balance
                <br></br>
                <input type="text" name="balance"/>
                </div>
                </center>   
            </div>
        );
    }
}

export default TopDiv;