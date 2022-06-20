import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLight: true,
    light: { bg: "#eee", syntax: "#555", ui: "#ddd" },
    dark: { bg: "#555", syntax: "#eee", ui: "#333" },
  };

  switchTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  };

  render() {
    // console.log(this.props);

    return (
      <ThemeContext.Provider
        value={{ ...this.state, switchTheme: this.switchTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
