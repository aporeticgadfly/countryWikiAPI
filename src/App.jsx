import React from "react";
import Card from "./Card";
import CountryCard from "./CountryCard";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Nav from "./Nav";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mapping : this.props.all, cardToRender: "", lighter: {backgroundColor: "hsl(0, 0%, 100%)"}, textStyle: {color: "black"}, darker: {backgroundColor: "hsl(0, 0%, 97%)"}, shadow: {boxShadow: "2px 2px 5px hsl(0, 0%, 80%)"}, lighterShadow: {boxShadow: "2px 2px 5px hsl(0, 0%, 80%)", backgroundColor: "hsl(0, 0%, 100%)"}};
    this.handleChange = this.handleChange.bind(this);
    this.cardClick = this.cardClick.bind(this);
    this.createCard = this.createCard.bind(this);
    this.createSingleCard = this.createSingleCard.bind(this);
    this.handleDropClick = this.handleDropClick.bind(this);
    this.borderClick = this.borderClick.bind(this);
    this.navClick = this.navClick.bind(this);
  }

  navClick() {
    if(window.marker === false) {
      window.marker = true;
      this.setState({lighter : { backgroundColor: "hsl(209, 23%, 22%)"}});
      this.setState({textStyle : {color: "white"}});
      this.setState({darker : { backgroundColor: "hsl(207, 26%, 17%)"}});
      this.setState({shadow : { boxShadow: "2px 2px 5px hsl(0, 0%, 10%)"}});
      this.setState({lighterShadow: {boxShadow: "2px 2px 5px hsl(0, 0%, 10%)", backgroundColor: "hsl(209, 23%, 22%)"}});
    }

    else if(window.marker === true) {
      window.marker = false;
      this.setState({lighter : { backgroundColor: "hsl(0, 0%, 100%)"}});
      this.setState({textStyle : {color: "black"}});
      this.setState({darker : { backgroundColor: "hsl(0, 0%, 97%)"}});
      this.setState({shadow : { boxShadow: "2px 2px 5px hsl(0, 0%, 80%)"}});
      this.setState({lighterShadow: {boxShadow: "2px 2px 5px hsl(0, 0%, 80%)", backgroundColor: "hsl(0, 0%, 100%)"}});
    }
  }

  borderClick(clicked){
    this.setState({cardToRender: clicked});
  }

  handleChange(event, e) {
    var matchedItems = [];
    for(var z = 0; z < this.props.all.length; z++) {
      if(this.props.all[z].name.toLowerCase().slice(0, event.target.value.length).match(event.target.value)) {
        matchedItems.push(this.props.all[z]);
      }
      else if(event.target.value == null) {
        matchedItems=this.props.all;
      }
      else{

      }
    this.setState({mapping:matchedItems});
    }
  }

  cardClick(cardClicked, e) {
    this.setState({cardToRender:cardClicked});
  }

  createCard(contact){
    return(
      <div className="countryCard" style = {this.state.shadow} key = {contact.id}>
        <Link to="/country.html">
          <Card
            lighter = {this.state.lighter}
            textStyle = {this.state.textStyle}
            cardClick = {this.cardClick}
            key = {contact.id}
            flag = {contact.flag}
            name = {contact.name}
            population = {contact.population}
            region = {contact.region}
            capital = {contact.capital}
            />
        </Link>
      </div>
    );
  }

  createSingleCard(){
    for(var y = 0; y < this.props.all.length; y++) {
      if(this.state.cardToRender === this.props.all[y].name)
      {
        var countryClicked = this.props.all[y];
        break;
      }
    }

    var currencies = "";
    for(var z = 0; z < countryClicked.currencies.length; z++) {
      if(z === countryClicked.currencies.length-1){
        currencies = currencies + countryClicked.currencies[z].name;
      }
      else {
      currencies = currencies + countryClicked.currencies[z].name + ", ";
      }
    }

    var languages = "";
    for(var w = 0; w < countryClicked.languages.length; w++) {
      if(w === countryClicked.languages.length-1){
        languages = languages + countryClicked.languages[w].name;
      }
      else {
      languages = languages + countryClicked.languages[w].name + ", ";
      }
    }

    /*var borders = [];
    for(var v = 0; v < countryClicked.borders.length; v++) {
      var firstChar = countryClicked.borders[v].charAt(0).toLowerCase();
      var secondChar = countryClicked.borders[v].charAt(1).toLowerCase();
      var thirdChar = countryClicked.borders[v].charAt(2).toLowerCase();
      for(var u = 0; u < this.props.all.length; u++) {
          if(this.props.all[u].name.includes(firstChar))
          {
            if(this.props.all[u].name.substr(this.props.all[u].name.indexOf(firstChar), this.props.all[u].name.length).includes(secondChar))
            {
              if(this.props.all[u].name.substr(this.props.all[u].name.indexOf(secondChar), this.props.all[u].name.length).includes(thirdChar))
              {
                borders.push(this.props.all[u].name);
              }
            }
          }
      }
    }*/
    var borders = [];
    for(var v = 0; v < countryClicked.borders.length; v++) {
      for(var u = 0; u < this.props.all.length; u++) {
        if(this.props.all[u].alpha3Code === countryClicked.borders[v]) {
          borders.push(this.props.all[u].name)
        }
      }
    }


    return(
      <div className = "countryCardDiv" style = {this.state.darker} key = {countryClicked.id}>
        <Nav lighterShadow = {this.state.lighterShadow} shadow = {this.state.shadow} lighter = {this.state.lighter} textStyle = {this.state.textStyle} navClick = {this.navClick}/>
        <Link to="/index.html">
          <button style = {this.state.lighterShadow} className="backbtn"><i style={this.state.textStyle} className="fas fa-arrow-left"></i><span style={this.state.textStyle}>Back</span></button>
        </Link>
        <CountryCard
          lighter = {this.state.lighter}
          textStyle = {this.state.textStyle}
          lighterShadow = {this.state.lighterShadow}
          key = {countryClicked.id}
          flag = {countryClicked.flag}
          name = {countryClicked.name}
          nativeName = {countryClicked.nativeName}
          population = {countryClicked.population}
          region = {countryClicked.region}
          subregion = {countryClicked.subregion}
          capital = {countryClicked.capital}
          topLevelDomain = {countryClicked.topLevelDomain}
          currencies = {currencies}
          languages = {languages}
          borders = {borders}
          borderClick = {this.borderClick}
        />
      </div>
    );
  }

  handleDropClick(continentClicked, e) {
    var continentArray = [];
    for(var z = 0; z < this.props.all.length; z++) {
      if(this.props.all[z].region === continentClicked) {
        continentArray.push(this.props.all[z]);
      }
    }
    this.setState({mapping:continentArray});
  }

  render() {
    return (
      <Switch>
        <Route path="/index.html">
          <div style={this.state.darker}>
            <Nav lighterShadow = {this.state.lighterShadow} shadow = {this.state.shadow} lighter = {this.state.lighter} textStyle = {this.state.textStyle} navClick = {this.navClick} />
            <div className = "inputs">
              <div style={this.state.lighterShadow} className = "divInput">
                <i style={this.state.textStyle} className="fas fa-search"></i>
                <Input shadow = {this.state.shadow} lighter = {this.state.lighter} textStyle={this.state.textStyle} handleChange= {this.handleChange}/>
              </div>
              <Dropdown lighter = {this.state.lighter} textStyle = {this.state.textStyle} lighterShadow={this.state.lighterShadow} dropClick={this.handleDropClick} africa="Africa" americas="Americas" asia="Asia" europe="Europe" oceania="Oceania"/>
            </div>
            <div className = "cards">
              {this.state.mapping.map(this.createCard)}
            </div>
          </div>
        </Route>
        <Route path="/country.html">
          {this.createSingleCard}
        </Route>
      </Switch>
    );}}

export default App;
