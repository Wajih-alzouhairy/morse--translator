import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";

const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
};

function translateMorse(textInput) {
  return textInput.split("").map(function (e) {
    return alphabet[e] || "";
  });
}

class MorseTranslation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", morse: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      morse: translateMorse(event.target.value),
    });
  }

  render() {
    return (
      <div className="box">
        <input
          type="text"
          placeholder="MorseTranslation"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        {this.state.morse}
      </div>
    );
  }
}

ReactDOM.render(<MorseTranslation />, document.getElementById("root"));
