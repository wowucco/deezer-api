import React, {Component} from 'react'
import GenreCard from '../GenreCard/index'

class GenresTiles extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className='col-md-12'>
        <div className='row'>
          {items.map(item =>
            <div className='col-md-4' key={item.id}>
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