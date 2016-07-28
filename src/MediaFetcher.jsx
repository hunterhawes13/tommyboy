import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaList from './MediaList.jsx';
import $ from 'jquery'

const omdb = function omdb(query) {
  return $.ajax({
    url: "http://www.omdbapi.com/",
    jsonp: "callback",
    dataType: "jsonp",
    data: Object.assign({}, { r: "json" }, query)
  })
};

export default class MediaFetcher extends Component {
    constructor(props){
    super(props);
    this.state = {
      media: []
    };
    this.getMedia(this.props.query);
  }
  getMedia(query) {
    
    omdb({s: query}).then((response) => {
      if (response && response.Response === "True") {
        //console.log(response);
        this.setState({ media: response.Search });
        //console.log(this.state);
      } else if (response && response.Response === "False") {
        // No media was found
      } else {
        console.error('Unknown error connecting to omdbapi.');
      }
    });
  }
  
  /* Dirty checking */
  componentWillReceiveProps(nextProps) {
    if(this.props.query !== nextProps.query) {
      this.getMedia(nextProps.query);
    }
  }
  render() {
    return (
      <div>
        <MediaList media={this.state.media} />
      </div>
    )
  }
}