import React, {Component} from 'react'
import {connect} from 'react-redux'
import GenresTiles from '../../components/GenresTiles'
import SearchBar from '../../components/SearchBar'
import {filterGenres} from '../../actions/genreActions'

class Genre extends Component {
  constructor(props) {
    super(props)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  /*componentDidMount() {
   const {dispatch, filterText} = this.props
   }*/
  handleUserInput(nextFilterText) {
    this.props.dispatch(filterGenres(nextFilterText))
  }

  render() {
    const {genres} = this.props.genres;
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h3>List of Genres</h3>
        </div>
        <SearchBar
          onUserInput={this.handleUserInput}
          filterText={this.props.filterText}/>
        <GenresTiles items={genres}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres
  }
}

export default connect(mapStateToProps)(Genre)