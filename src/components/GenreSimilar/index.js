import React, {Component} from 'react'

class GenreSimilar extends Component {
	render() {
		const {similartags} = this.props.similar
		let similar
		if (similartags && similartags.tag.length > 0) {
			similartags.tag.map(item => {
				similar.push(<button>{item}</button>)
			})
		} else {
			similar = <div>Could not retrieve similar genres</div>
		}
		return (
			<div>
				{similar}
			</div>
		)
	}
}

export default GenreSimilar