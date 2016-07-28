import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 import MediaItem from './MediaItem.jsx';


export default class MediaList extends Component {
  render() {
    return (
      <div class={mediaItemContainer}>
        {this.props.media.map(function(item) {
          return (
            <MediaItem title={item.Title} type={item.Type} id={item.imdbID}/>
          )   
        })}
      </div>
    )
  }
}

var mediaItemContainer = {
  display: "block",
  paddingTop: "60px",
  width: "33%",
  textAlign: "center",
  borderTop: "1px solid grey",
  width: "100%",
  backgroundColor: "#f2f2f2",
};