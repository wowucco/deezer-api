import React, { Component } from 'react'
import NavLink from '../NavLink/index'


class App extends Component {
    render() {
        return (
            <div className='container'>
                <ul className='nav nav-pills'>
                    <li><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></li>
                    <li><NavLink to='/genre'>Genre</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default App