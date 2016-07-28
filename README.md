## Synopsis

A React component based App searching IMDB data base. Displays top 10 listings with a tag regarding whether  Movie, TV, or Game.

## Code Example

```
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
```

## Motivation

For personal practice learning React Components.

## Installation

<!---Provide code examples and explanations of how to get the project.-->

## API Reference

http://www.omdbapi.com/

## Contributors

Hunter Hawes
github: [Hunter Hawes](https://github.com/hunterhawes13)
twitter: [@tikishackfun](https//twitter.com/tikishackfun)

with help from

Tim Toupin
github: [Tim Toupin](https://github.com/tim2pin)
twitter [@tim2pin](https//twitter.com/952pin)

## License

This project is licensed under the terms of the MIT license.

## Warning

This should not be used in production. It is for demonstration purposes only.

## View live version

[On Codepen](http://codepen.io/hunterhawes13/pen/Lkmrqd)
