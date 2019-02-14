import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.whenSubmitted(this.state.term);
//in the App component (parent) we pass props to the SearchBar component (child). onFormSubmit method is called when user hits submit button (event handler inside the form tag). onFormSubmit takes the props object and calls its whensubmitted method, that was declared in the App component. In such a way we pass data (the search term) from the child to the parent.

  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="type your search term here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;