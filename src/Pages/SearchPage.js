import React from 'react';
import SearchBar from '../Components/Searchbar';
import Notelist from '../Components/NoteList';
import { searcNotes } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types'; 

function SearchPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');
 
  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }
 
  return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundedNote: props.activeKeyword ? searcNotes(props.activeKeyword) : []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundedNote: searcNotes(keyword)
      };
    });
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Search Movie</h2>
        <SearchBar search={this.onSearch} defaultKeyword={this.props.activeKeyword} />
        <Notelist notes={this.state.foundedNote} />
      </section>
    );
  }
}

SearchPage.propTypes = {
  onSearch : PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
}

export default SearchPageWrapper;
