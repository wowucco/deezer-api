import React, {Component} from 'react'
import GenreCard from '../GenreCard'

class GenresTiles extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className='col-md-12'>
        <div className='row'>
          {items.map(item =>
            <div className='col-md-3' key={item.name}>
              <GenreCard
                item={item}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GenresTiles