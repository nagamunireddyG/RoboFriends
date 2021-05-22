import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ComponentError'
import './App.css'

function App() {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// }

	// componentDidMount() {
		
	// }

	const [robots, setRobots] = useState([])
	const [ searchfield, setSearchfield ] = useState('')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {setRobots(users)})
	})

	const onsearchchange = (event) => {
		setSearchfield(event.target.value)
	}

	const filteredrobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	return !robots.length ? <h1>Robots Loading</h1>
	 : (
		<div className= 'tc b--red bg-lightest-blue pa2'>
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox searchchange= {onsearchchange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredrobots}/>
				</ErrorBoundary>
			</Scroll>
		</div>
	);	
}

export default App;