import React from 'react';

const SearchBox = ({ searchChange, stateChange})=>{
	let states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL',
	'GA','HI','IA','ID','IL','KS','KY','LA','MA','MD','ME','MI','MN',
	'MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA',
	'RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'];
	return (
    <div>
		    <input name="search" className="pa2 ba b--yellow bg-lightest-yellow" type='search' placeholder="hospital name..." onChange={searchChange} />
			<div class="filters pa2">
				<select name="filter" onChange={stateChange}>
					<option value="">State</option>
					{states.map(state => {
					return	<option value={state}>{state}</option>
					})}
				</select>
			</div>
    </div>
		)
}

export default SearchBox;
