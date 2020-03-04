import React from "react";

class Nav extends React.Component {
  render() {
    return(
      <nav style = {this.props.lighterShadow}>
        <h1 style = {this.props.textStyle}>Where In The World?</h1>
        <button style = {this.props.lighter} onClick={this.props.navClick} className="converter"><i style={this.props.textStyle} className="fas fa-moon"></i><span style={this.props.textStyle}>Dark Mode</span></button>
      </nav>
    );
  }
}

export default Nav;
