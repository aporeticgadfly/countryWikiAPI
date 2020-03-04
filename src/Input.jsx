import React from "react";

class Input extends React.Component {

  render() {
    return (<input style = {this.props.lighter}/*style = {::placeholder {color: this.props.textStyle}}*/ onChange={this.props.handleChange} type="search" placeholder="Search for a country..." className="searchbar"></input>);
  }
}

export default Input;
