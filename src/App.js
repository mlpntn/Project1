import React, { Component } from 'react';
import NameForm from './components/NameForm';
import ReactSurveyForm from './components/ReactSurveyForm';
import TopDiv from './components/top';
import MiddleDiv from './components/middle';
import BottomDiv from './components/bottom';
import AllDiv from './components/all';

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentWillMount() {
    this.setState({categories: [
        {
            date: "10/25/2018",
            title: "Home",
            amount: 125
        },
        {
          date: "10/25/2017",
          title: "Home2",
          amount: -125
        }
    ]});
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Ledger</h2>
        </div>
        {/* <NameForm/>
        <ReactSurveyForm/> */}
        {/* <TopDiv/>
        <br></br>
        <MiddleDiv/>

        <ul className="sidebar__categories container-fluid">
        <BottomDiv categories={this.state.categories}/>
            </ul>
         */}

         <AllDiv/>
      </div>
      );
    }
  }

export default App;