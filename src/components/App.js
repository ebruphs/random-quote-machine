import React, { Component } from'react';
import RandomQuoteMachine from '../components/RandomQuoteComponent/RandomQuotemachine';
import '../components/App.css';

class App extends Component {

    render(){        
        return(
            <div id='title'>
                <h1>Random Quote Machine</h1>
                <RandomQuoteMachine />      
            </div>
        );
    }
}

export default App;