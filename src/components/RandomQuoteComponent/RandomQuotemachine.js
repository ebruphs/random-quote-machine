import React, { Component } from 'react';
import twitterIcon from '../assets/twitterIcon.png';
import './quote.css';




const RANDOMQUOTE_API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class RandomQuotemachine extends Component{
    constructor(props){
        super(props);
        this.state = {
            author: '',
            quote: '',
            twitter: ''
        }  
    }

    componentDidMount(){
        this.fetchNextQuote()
    };
    
    fetchNextQuote = ()=>{
        fetch(`${RANDOMQUOTE_API}`)
            .then(response =>response.json())
            .then(json =>this.setState(()=>{
                let results = json.quotes[Math.floor(Math.random() * json.quotes.length)];
                console.log('results', results)
                return {
                    author: results.author,
                    quote: results.quote,
                    twitter: 'twitter.com/intent/tweet'
                };
            }))
            .catch(error => alert(error.message));
            console.log('this next joke', this);
    }

    render(){
        return(
            <div id='quote-box'>
                <div id='quote-session'>
                    <p id='text'>"{this.state.quote}"</p>
                    <h4 id='author'><em>{this.state.author}</em></h4>
                    <button id='new-quote' onClick={this.fetchNextQuote}>Next Quote</button>
                    <hr className='rule' />
                    <a href={this.state.twitter} id='tweet-quote'>
                        <img src={twitterIcon} alt='twitter-Icon' className='twitterIcon' />
                    </a>
                </div>
            </div>
        );
    }   
}
export default RandomQuotemachine;