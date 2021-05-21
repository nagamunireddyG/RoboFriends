import React from 'react';


const SearchBox = ({searchfield, searchchange}) => {
	return (
		<div className= 'pa2'>
			<input className= 'pa2 b--green bg-lightest-blue'
				type='search' 
				placeholder='Search Robots'
				onChange={searchchange}
			/>
		</div>
	);
}

export default SearchBox;