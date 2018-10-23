import React, { Component } from 'react';

class AllDiv extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datas : [],
          }
 
    }
   
    handleSum = (e) =>{
        // let a = this.state.datas.length;
        // let b = 0;
        // for(let m=0; m<a; m++){
        //     //console.log(this.state.datas.map(a => a.amount));
        //      b = this.state.datas.map(a => a.amount) + b;
            
        // }
        // this.setState(
        //     this.state
        // )

        let sum = a => a.reduce((x, y) => x + y);
        let totalAmount = sum(this.state.datas.map(x => Number(x.amount))); 
        console.log(totalAmount.toFixed(2))

        let sum2 = a => a.reduce((x, y) => x + y);
        let totalAmount2 = sum2(this.state.datas.map(x => Number(x.amount))); 
        console.log(totalAmount2.toFixed(2))

        this.amount2.value = totalAmount.toFixed(2);

        //console.log(b); 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //alert('The value is: ' + this.date.value + ' ' + this.title.value + ' ' + this.amount.value);
        let date = this.date.value;
        let title = this.title.value;
        let amount = this.amount.value;
        
        this.state.datas.push({date, title, amount})
        //ample.push({date, title, amount});
        //console.log(sample);

        this.setState(
            this.state
        )

        this.date.value = '';
        this.title.value = '';
        this.amount.value = '';
        
        let a = this.state.datas.length;
        console.log(a);

        this.handleSum();
    }

    render() {

        return (
           
            <div className="post-container">
                <div className="credit">Credit
                <br></br>
                <span id="credit" class="currency"></span></div>
                <div  className="debit">Debit
                <br></br>
                <span id="debit" class="currency"></span>
                </div>                
                <div  className="balance">Balance
                <br></br>
                <input type="text" className="form-control" ref={(amount2) => this.amount2 = amount2} placeholder="Amount"/>
                <span id="balance" ref={(balance) => this.balance = balance} class="currency"></span>
                </div>
                          
            <br></br>
            <br></br>
            <br></br>
            <br></br>
               <center>     
             <table>
                 <tr>
                     <td><input type="date" className="form-control" ref={(date) => this.date = date}  placeholder="Date"/></td>
                     <td><input type="text" className="form-control" ref={(title) => this.title = title}  placeholder="Title"/></td>
                     <td><input type="text" className="form-control" ref={(amount) => this.amount = amount} placeholder="Amount"/></td>
                     <td><button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button></td>    
                 </tr>                      
             </table>    
             </center>         
            <br></br>
            <br></br>
         <center>
                <table className="table table-responsive">
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th className="last">Action</th>                   
                    <tbody>
                    {this.state.datas.map(datas => (
                    <tr>
                    <td>{datas.date}</td>
                    <td>{datas.title}</td>
                    <td>{datas.amount}</td>
                    <td className="last"><button className="btn btn-primary">Edit</button> { }<button className="btn btn-primary">Delete</button></td>
                    </tr>
                    ))}
                </tbody>
                </table>
                </center>
            </div>
         
        );
    }
}

export default AllDiv;