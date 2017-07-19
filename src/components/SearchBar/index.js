import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value
        );
    }
    render() {
        return (
            <div className='col-xs-12'>
                <form className='form-horizontal'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Filter out...'
                        value={this.props.filterText}
                        ref={(input) => this.filterTextInput = input}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar