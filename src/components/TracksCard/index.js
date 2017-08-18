import React, {Component} from 'react'
import {Link} from 'react-router'
import ToolTip from 'react-portal-tooltip'
import {Col} from 'react-bootstrap'
import './style.scss'

class TracksCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isTooltipActive: false
		}
	}
	showTooltip() {
		this.setState({isTooltipActive: true})
	}
	hideTooltip() {
		this.setState({isTooltipActive: false})
	}
	render() {
		const {item} = this.props
		const id= 'track-card'+item['@attr'].rank
		let linkArtist = `/artists/${item.artist.name.replace(' ', '_')}`;
		let linkTrack = `/tracks/${item.artist.name.replace(' ', '_')}/${item.name.replace(' ', '_')}`;
		return (
			<div>
				<img className='slider-image'
					id={id}
					src={item.image[2]['#text']}
					onMouseEnter={this.showTooltip.bind(this)}
					onMouseLeave={this.hideTooltip.bind(this)}
				/>
				<div className='coverflow__text__39hqd'>{item.name}</div>
				<ToolTip active={this.state.isTooltipActive} position='top' arrow='center' parent={`#${id}`}>
					<div className='tooltip-container'>
						<Col sm={6}>
							<img src={item.image[3]['#text']}/>
						</Col>
						<Col sm={6}>

							<p>Artist: <strong><Link to={linkArtist}>{item.artist.name}</Link></strong></p>
							<p>Track: <strong><Link to={linkTrack}>{item.name}</Link></strong></p>
							<p>
								<Link to={linkTrack} >
									Read more
								</Link>
							</p>
						</Col>
					</div>
				</ToolTip>
			</div>
		)
	}
}

export default TracksCard