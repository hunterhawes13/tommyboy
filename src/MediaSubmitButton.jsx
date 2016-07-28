import React, {Component} from 'react';
import ReactDOM from 'react-dom';



export default class MediaSearchButton extends Component {
  render() {
    return (
      <input style={searchButton} type="button" value="Search" onClick={this.props.OnSubmitButtonClick}></input>
    )
  }
}

var searchButton = {
  height: "20px",
  width: "60px",
  color: "#262626",
  backgroundColor: "whitesmoke",
  margin: "auto",
  display: "block",
  marginBottom: "80px",
  borderTop: "1px solid ##737373",
  padding: "20px, 30px",

};