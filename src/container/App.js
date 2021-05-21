import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
	}

	onsearchchange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render () {
		const { robots, searchfield } = this.state
		const filteredrobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
			return !robots.length ? <h1>Robots Loading</h1>
			 : (
				<div className= 'tc b--red bg-lightest-blue pa2'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchchange= {this.onsearchchange}/>
					<Scroll>
						<CardList robots={filteredrobots}/>
					</Scroll>
				</div>
			);
	}
}

export default App;