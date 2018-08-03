import React from 'react';

const Card = ({ hospital_id, hospital_name, hospital_type, hospital_rating, hospital_city, hospital_state, hospital_address, hospital_phone_number, hospital_mortality, hospital_ownership}) => {
	return(
			<div className="bg-blue dib br3 pa3 ma2 grow bw2 shadow-5">
				<div>
					<h2>{hospital_name}</h2>
					<p>Type: {hospital_type}</p>
					<p>Ownership: {hospital_ownership}</p>
					<p className="name">Location: {`${hospital_address.toLowerCase()} , ${hospital_city} , ${hospital_state}`}</p>
					<p>Phone#: {hospital_phone_number}</p>
					<p>Mortality rate: {hospital_mortality}</p>
					<p><span className={`stars-container stars-${hospital_rating / 5 * 100}`}>★★★★★</span></p>
				
				</div>
			</div>
		);
}

export default Card;
