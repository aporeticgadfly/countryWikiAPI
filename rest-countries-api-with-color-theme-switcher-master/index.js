alert();

var requestURL = 'https://restcountries.eu/rest/v2/all';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var all = request.response;
  console.log(all[0].name);

  for (var x = 0; x < all.length; x++) {
    ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        all[x].name
      ),
      React.createElement(
        'p',
        null,
        all[x].population
      ),
      React.createElement(
        'p',
        null,
        all[x].region
      ),
      React.createElement(
        'p',
        null,
        all[x].capital
      )
    ), document.getElementByID("root"));
  }
  /*
    flag, name, population, region, capital
  */
  /*
  back button
    onclick a react component: flag, name, native name, population, region, subregion, capital, toplevel domain, currencies, languages, border countries
  */
};