
import React from 'react'
import {useState} from "react"
import "./App.css";
import axios from "axios";

function App() {

  const [quote, setQuote]=useState("")
  const [author, setAuthor]=useState("");

  function getQuote(){
axios.get("https://api.quotable.io/random").then(res=>{
  console.log(res.data.content)
  setQuote(res.data.content);
  setAuthor(res.data.author);
}).catch(err=>{
  console.log(err)
});
  }
  return (
    <div className="App">
      <h1>QUOTE SELECTOR</h1>
      <div className="section">
      { quote ? <p className="quote">{quote}</p>: null};
      { author ? <p className="author">{author}</p>: null}
      </div>
      <button className="btn"
      onClick={getQuote}
      >Get Quote</button>
    </div>
  )
}

export default App;

















