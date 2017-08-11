import React, {Component} from 'react'
import {Link} from 'react-router'
import './style.scss'

class GenreCard extends Component {
	render() {
		const {id, name, picture_medium} = this.props.item
		let linkName = '/genres/' +id;
		return (
			<div className='genre-item'>
				<Link to={linkName}>
					<img src={picture_medium} alt={name}/>
          <h4>{name}</h4>
				</Link>
			</div>
		)
	}
}

export default GenreCard