import React, {Component} from 'react'
import {Link} from 'react-router'
import './style.scss'

class GenreCard extends Component {
  render() {
    const item = this.props.item
    let linkName = '/genre/'+item.name.replace(' ', '_');
    return (
      <div>
        <Link to={linkName}>
          <button type='button' className='btn btn-primary genre-btn'>{item.name}</button>
        </Link>
      </div>
    )
  }
}

export default GenreCard