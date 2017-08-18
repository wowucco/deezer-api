import React, {Component} from 'react'
import TracksCard from '../TracksCard'
import Coverflow from 'react-coverflow'

class TracksTiles extends Component {
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
		const {track} = this.props.items
		console.log(track)
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
						{track.map(item =>
							<TracksCard key={item['@attr'].rank} item={item}/>
						)}
					</Coverflow>
					<button onClick={this.handleClick.bind(this)}>Radom Item</button>
				</div>
			</div>
		)
	}
}

export default TracksTiles