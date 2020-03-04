import React from "react";

class Card extends React.Component {

  render() {
    return <div className = "countryCard2" style = {this.props.lighter} onClick={(e) => this.props.cardClick(this.props.name, e)}>
      <img src={this.props.flag} alt=""/>
      <h3 style = {this.props.textStyle}>{this.props.name}</h3>
      <p style = {this.props.textStyle}><span style = {this.props.textStyle}>Population:</span> {this.props.population}</p>
      <p style = {this.props.textStyle}><span style = {this.props.textStyle}>Region:</span> {this.props.region}</p>
      <p style = {this.props.textStyle} className="last"><span>Capital:</span> {this.props.capital}</p>
    </div>;
  }
}

export default Card;
