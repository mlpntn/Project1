import React, { Component } from 'react';

class MiddleDiv extends Component {

    constructor(props) {
        super(props);

        //this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        alert('The value is: ' + this.date.value + ' ' + this.title.value + ' ' + this.amount.value);
        let date = this.date.value;
        let title = this.title.value;
        let amount = this.amount.value;
        let datas = [];
   
        datas.push({date, title, amount});
        console.log(datas);
    }

    render() {
        return (
            
            <div className="mid-container">
             
                    <table>
                        <tr>
                            <td><input type="date"  ref={(date) => this.date = date}  placeholder="Date"/></td>
                            <td><input type="text" ref={(title) => this.title = title}  placeholder="Title"/></td>
                            <td><input type="text" ref={(amount) => this.amount = amount} placeholder="Amount"/></td>
                            <td><button onClick={this.handleSubmit}>Submit</button></td>    
                        </tr>                      
                    </table>
                    
            </div>



        );
    }
}

export default MiddleDiv;