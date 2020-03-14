import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    underline: false,
    bold: false,
    italic: false,
    currentColor: null
  };

  fontStyle = style => {
    this.setState({ [style]: !this.state[style] });
  };

  fontColor = color => {
    this.setState({ currentColor: color });
  };

  render() {
    const stylingBoxes = stylings.map(style => (
      <button
        className="btn btn-light"
        style={styles[style]}
        key={style}
        onClick={() => this.fontStyle(style)}
      >
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => (
      <button
        style={{ backgroundColor: color, height: 30, width: 30 }}
        key={color}
        onClick={() => this.fontColor(color)}
      />
    ));

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            fontStyle: this.state.italic ? "italic" : "",
            fontWeight: this.state.bold ? "bold" : "",
            textDecorationLine: this.state.underline ? "underline" : "",
            color: this.state.currentColor
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
