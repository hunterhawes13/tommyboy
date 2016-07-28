import React, {Component} from 'react';
import ReactDOM from 'react-dom';




export default class MediaItem extends Component {
  render() {
    var url = `http://www.imdb.com/title/${this.props.id}`
    return (
      <div class={mediaItemContainer}>
        <a style={mediaTitle} href={url}> {this.props.title} </a>  {this.props.type}  
      </div>
    );
  }
}

var mediaTitle = {
  fontWeight: "bold",
  fontSize: "28px",
  color: "MediumVioletRed",
  textDecoration: "none",
  paddingTop: "5px",
  letterSpacing: "2px"
};

var mediaItemContainer = {
  display: "block",
  paddingTop: "60px",
  width: "33%",
  textAlign: "center",
  borderTop: "1px solid grey",
  width: "100%",
  backgroundColor: "#f2f2f2",
};