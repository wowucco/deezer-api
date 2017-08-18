import React, {Component} from 'react'
//import {Link} from 'react-router'
import ToolTip from 'react-portal-tooltip'
import './style.scss'

class ArtistsCard extends Component {
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
		const item = this.props.item
		const id= 'artist-card'+item['@attr'].rank
		//let linkName = '/artists/'+item.name.replace(' ', '_');
		return (
		<div>
			<img className='slider-image'
				id={id}
				src={item.image[2]['#text']}
				onMouseEnter={this.showTooltip.bind(this)}
				onMouseLeave={this.hideTooltip.bind(this)}
				data-action={`/artists/${item.name.replace(' ', '_')}`}
			/>
			<div className='coverflow__text__39hqd'>{item.name}</div>
			<ToolTip active={this.state.isTooltipActive} position='top' arrow='center' parent={`#${id}`}>
				<div>
					<p><strong>{item.name}</strong></p>
					<img src={item.image[3]['#text']}/>
				</div>
			</ToolTip>
		</div>
		)
	}
}

export default ArtistsCard
