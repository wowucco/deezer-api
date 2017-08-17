import React, {Component} from 'react'
//import ArtistsCard from '../ArtistsCard'
import Coverflow from 'react-coverflow'
//import {Link} from 'react-router'

class ArtistsTiles extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: 0,
			count: 0
		}
	}
	componentDidMount() {
		this.setState({
			count: this.props.items.length
		})
	}
	handleClick() {
		let num =  Math.floor(Math.random() * (this.state.count + 1))
		this.setState({
			active: num
		});
	}
	render() {
		const {items} = this.props
		return (
			<div className='col-md-12'>
				<div className='row'>
					<Coverflow width='100%' height='500'
						displayQuantityOfSide={2}
						navigation={true}
						enableHeading={true}
						enableScroll={true}
						clickable={true}
						active={this.state.active}
					>
					{items.map(item =>
						//<Link to={`/artists/${item.name.replace(' ', '_')}`}>
							<img key={item.name} src={item.image[2]['#text']} alt={item.name} data-action={`/artists/${item.name.replace(' ', '_')}`} />
						//</Link>
					)}
					</Coverflow>
					<button onClick={this.handleClick.bind(this)}>Radom Item</button>
				</div>
			</div>
		)
	}
}

export default ArtistsTiles