import React, {Component} from 'react'
import './style.scss'

class GenreCard extends Component {
  render() {
    const item = this.props.item
    return (
      <div>
        <button type='button' className='btn btn-primary genre-btn'>{item.name}</button>
      </div>
    )
  }
}

export default GenreCard