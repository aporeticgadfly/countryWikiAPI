import React from "react";

class Dropdown extends React.Component {
  render() {
    return(
    <div className="dropdown">
      <button style={this.props.lighterShadow} className="dropbtn"><span style = {this.props.textStyle} className="dropspan">Filter By Region</span><i style={this.props.textStyle} className="fas fa-chevron-down"></i></button>
      <div className="dropdown-content" style={this.props.lighterShadow}>
        <button style = {this.props.lighter} className="droplink" onClick={(e) => this.props.dropClick(this.props.africa, e)}><span style = {this.props.textStyle}>{this.props.africa}</span></button>
        <button style = {this.props.lighter} className="droplink" onClick={(e) => this.props.dropClick(this.props.americas, e)}><span style = {this.props.textStyle}>{this.props.americas}</span></button>
        <button style = {this.props.lighter} className="droplink" onClick={(e) => this.props.dropClick(this.props.asia, e)}><span style = {this.props.textStyle}>{this.props.asia}</span></button>
        <button style = {this.props.lighter} className="droplink" onClick={(e) => this.props.dropClick(this.props.europe, e)}><span style = {this.props.textStyle}>{this.props.europe}</span></button>
        <button style = {this.props.lighter} className="droplink" onClick={(e) => this.props.dropClick(this.props.oceania, e)}><span style = {this.props.textStyle}>{this.props.oceania}</span></button>
      </div>
    </div>);
  }
}

export default Dropdown;
