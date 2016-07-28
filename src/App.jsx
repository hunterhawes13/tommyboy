
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaSearchInput from './MediaSearchInput.jsx';
import MediaSubmitButton from './MediaSubmitButton.jsx';
import MediaFetcher from './MediaFetcher.jsx';
/**
 * A stateful component to store our app
 */

var background = {
    background:'url("http://data.whicdn.com/images/80075084/superthumb.jpg") rgba(0, 0, 0, .2)',
  backgroundRepeat: "repeat",
  position: "fixed",
  padding: "0",
  margin: "0",
  top: "0",
  left: "0",
      display: "block",
        width: "100%",
  height: "100%",
 
}

var pageTitleStyle = {
    // backgroundImage: 'url("http://data.whicdn.com/images/80075084/superthumb.jpg")',

    display: "block",
  textAlign: "center",
  color: "whitesmoke",
  textShadow: "-1.5px 0 black, 0 1.5px black, 1.5px 0 black, 0 -1.5px black",
  width: "100%",
  height: "100%",
    fontFamily: "Lucida Console",
    fontSize: "24px",
    fontWeight: "bold",
    WebkitTransition: 'all',
    msTransition: 'all',
  color: "white",
 };



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchQueryValue:''
    };
  }
  handleSubmitButtonClick(e) {
    // User clicked a button so get the last input value
    // and set the state 
    this.setState({ 
      query: this.state.searchQueryValue 
    });
  }
  handleSearchInputChange(e) {
    // We have a new input value
    this.setState({ searchQueryValue: e.target.value });
  }
  render() {
    return (
      <div style={background}>
      <div style={pageTitleStyle}>
        <MediaSearchInput OnSearchInputChange={this.handleSearchInputChange.bind(this)} />
        <MediaSubmitButton OnSubmitButtonClick={this.handleSubmitButtonClick.bind(this)} />
        <MediaFetcher query={this.state.query} />
      </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);