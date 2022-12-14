import React, { useState } from "react";
import "./styles.css";

var username = prompt("what is your name?");
const emojidictionary = {
  "😊": "smiling",
  "😞 ": "sad",
  "🍔": "food and drink",
  "❤️": "love",
  "🚀": "travel",
  "😠": "Angry",
  "🤳 ": "Selfie",
  "👻": "Ghost",
  "🏏": "Cricket",
  "⌚": "Watch"
};
var emojiweknow = Object.keys(emojidictionary);

export default function App() {
  const [meaning, setoutput] = useState("");
  function emojiinputhandler(event) {
    var userInput = event.target.value;
    var meaning = emojidictionary[userInput];

    setoutput(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojidictionary[emoji];

    setoutput(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <input onChange={emojiinputhandler}></input>
      <h2> {meaning}</h2>
      <h3>emojiweknow</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
