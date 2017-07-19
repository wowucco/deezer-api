import React, {Component} from 'react'

class GenreCard extends Component {
    render() {
        const item = this.props.item
        return (
            <div>
                <img src={item.picture_small} />
                Name: {item.name}
            </div>
        )
    }
}

export default GenreCard