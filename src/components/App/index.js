import React, {Component} from 'react'
import NavLink from '../NavLink/index'
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';

class App extends Component {
	render() {
		const divStyle = {
			width: '100%',
			height: '100%'/*,
			backgroundImage: 'url(/common/background-image1.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%'*/
		}
		return (
			<div style={divStyle}>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<NavLink to='/'><span>LastFM API</span></NavLink>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav className='navbar-right'>
							<NavItem><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></NavItem>
							<NavItem><NavLink to='/genres'>Top Genres</NavLink></NavItem>
							<NavItem><NavLink to='/artists'>Top Artists</NavLink></NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className='container'>{this.props.children}</div>
			</div>

		)
	}
}
export default App