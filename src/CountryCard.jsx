import React from "react";

class CountryCard extends React.Component {
  constructor(props) {
    super(props);
    this.borderButtons = this.borderButtons.bind(this);
  }

  borderButtons(country) {
    return (<button style = {this.props.lighterShadow} onClick={(e) => this.props.borderClick(country, e)} className="borderBtns"><p style = {this.props.textStyle} >{country}</p></button>);
  }

  render() {
    return (<div className="container">
      <img className="couFlag"src={this.props.flag} alt=""/>
      <div>
        <h2 style = {this.props.textStyle}>{this.props.name}</h2>
        <div className="rightDiv">
          <div>
            <p style = {this.props.textStyle} className="couDetails">Native Name: {this.props.nativeName}</p>
            <p style = {this.props.textStyle} className="couDetails">Population: {this.props.population}</p>
            <p style = {this.props.textStyle} className="couDetails">Region: {this.props.region}</p>
            <p style = {this.props.textStyle} className="couDetails">Subregion: {this.props.subregion}</p>
            <p style = {this.props.textStyle} className="couDetails">Capital: {this.props.capital}</p>
          </div>
          <div>
            <p style = {this.props.textStyle} className="couDetails">Top Level Domain: {this.props.topLevelDomain}</p>
            <p style = {this.props.textStyle} className="couDetails">Currencies: {this.props.currencies}</p>
            <p style = {this.props.textStyle} className="couDetails">Languages: {this.props.languages}</p>
          </div>
        </div>
        <div className="couDetails borderDiv"><span style={this.props.textStyle}>Border Countries: </span>{this.props.borders.map(this.borderButtons)}</div>
      </div>
    </div>);
  }
}

export default CountryCard;
