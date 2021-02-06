import React from 'react';
import './App.css';
import axios from 'axios';
import Quotes from './components/Quotes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: 'poulet',
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSihttps://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939)"
    };
    this.getQuote = this.getQuote.bind(this);
  }
getQuote() {
  axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
  .then(response => response.data )
  .then(data => { 
    this.setState({
      quote: data[0].quote,
      character: data[0].character,
      image: data[0].image})

    })}
  componentDidMount() {
    this.getQuote()
  }

  render() {
    return (
      <div className="App">
        <Quotes quot={this.state.quote} img={this.state.image} char={this.state.character} />
       
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}


export default App;
