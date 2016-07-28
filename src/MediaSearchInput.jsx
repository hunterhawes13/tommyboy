import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

export default class MediaSearchInput extends Component {
  render() {
    return (
      <label>
        Media search: 
        <input type="text" onChange={this.props.OnSearchInputChange}></input>
      </label>
    )
  }
}