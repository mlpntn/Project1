import React, { Component } from 'react';
import List from './list';

class BottomDiv extends Component {

    constructor(props) {
        super(props);

            //this.handleSubmit = this.handleSubmit.bind(this);
        

    }

    render() {

        return (

            <div className="post-container">
                <table>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Action</th>                   
                    <List/>
                </table>
            </div>
        );
    }
    
}
export default BottomDiv;