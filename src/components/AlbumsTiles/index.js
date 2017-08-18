import React, {Component} from 'react'
import AlbumsCard from '../AlbumsCard'
import Coverflow from 'react-coverflow'

class AlbumsTiles extends Component {
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
						enableHeading={false}
						enableScroll={true}
						clickable={true}
						active={this.state.active}
					>
						{items.map(item =>
							<AlbumsCard key={item.name} item={item}/>
						)}
					</Coverflow>
					<button onClick={this.handleClick.bind(this)}>Radom Item</button>
				</div>
			</div>
		)
	}
}

export default AlbumsTiles