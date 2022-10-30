import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// make list of quote objects

function Quote(author, quote) {this.author = author; this.quote = quote};
let tR = new Quote("Theodore Roosevelt", "It is hard to fail but it is worse to have never tried." );
let fN = new Quote("Friedrich Nietzsche", "That which does not kill us makes us stronger.");
let tE = new Quote("Thomas Edison", "I have not failed. I've just found 6 million ways which don't work.");
let wC = new Quote("Winston Churchill", "Success is not final, failure is not fatal; it is courage to continue that counts.")
let jGoe = new Quote("Johann Goethe", "Live each day as if life had just begun.")
let oWi = new Quote("Oscar Wilde", "Just B urself.")
let mCi = new Quote("Marcus Cicero", "A library without books is like a body without a soul.")
let mTw = new Quote("Mark Twain", "If you tell the truth, you don't have to remember anything.")
let rWE = new Quote("Ralph Waldo Emerson", "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.")
let nGai = new Quote("Neil Gaiman", "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.")
let wSh = new Quote("William Shakespeare","The fool doth think he is wise, but the wise man knows himself to be a fool.")
let dAd = new Quote("Douglas Adams", "I may not have gone where I intended to go, but I think I have ended up where I needed to be.")
let wSh2 = new Quote("William Shakespeare", "Love all, trust a few, do wrong to none.")
let pPi = new Quote("Pablo Picasso", "Everything you can imagine is real.")
let gBs = new Quote("George Bernard Shaw", "Life isn't about finding yourself. Life is about creating yourself.")
let dFi = new Quote("Alexandre Dumas fils", "The difference between genius and stupidity is: genius has its limits.");
let aTe = new Quote("Alfred Tennyson", "If I had a flower for every time I thought of you...I could walk through my garden forever.");
let jRR = new Quote("JRR Tolkein", "Not all those who wander are lost.");
let aRi = new Quote("Aristotle", "Knowing yourself is the beginning of all wisdom.");
let eAP = new Quote("Edgar Allen Poe", "I became insane, with long intervals of horrible sanity.");
let aHgn = new Quote("Aldous Huxley", "Facts do not cease to exist because they are ignored.")
let fDo = new Quote("Fyodor Dostoevsky", "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.")
let ebW = new Quote("EB White", "If the world were merely seductive, that would be easy. If it were merely challenging, that would be no problem. But I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.")
const quoteList = [tR, fN, tE, wC, jGoe, oWi, mCi, mTw, rWE, nGai, wSh, wSh2, dAd, pPi, gBs, dFi, aTe, jRR, aRi, eAP, aHgn, fDo, ebW]


// function to display quotes on page
class DisplayQuote extends React.Component {
  constructor(props) {
    super(props); this.state = {
      index: Math.floor(Math.random() * quoteList.length)};
  this.newQuote = this.newQuote.bind(this)
  }
  
  newQuote (event){
    // generate random number Math.floor(Math.random() * quote_list.length)
    // if random number is === index in state, reroll
    // else render quote & author at index
    let rn = Math.floor(Math.random() * quoteList.length);
    if (rn === this.state.index){rn = Math.floor(Math.random() * quoteList.length)};
    this.setState({index: rn});
  };
  
  render() { 
    return (
    <div>
        <div id="text">"{quoteList[this.state.index].quote}"</div>
        <div id="author">- {quoteList[this.state.index].author}</div>
        <div className="fbox">
          
          <a className="button" id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" ><i className="fa-brands fa-twitter fa-lg inline" id="tweet"></i></a>
        <button id="new-quote" className="inline" onClick={this.newQuote}>New Quote</button>
        </div>
    </div>
  )}
}

/* render to page */

const root = ReactDOM.createRoot(
  document.getElementById('container-box')
);
root.render(
  <div id="quote-box">
    <DisplayQuote ></DisplayQuote>
  
  </div>
);