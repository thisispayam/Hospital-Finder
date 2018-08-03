import React from 'react';
import	Card from './Card';

const CardList = ({hospitals}) => {
return(
		<div>
			{
			hospitals.map((unit,i) =>{
					return (
						<Card
							key={i}
							hospital_id={hospitals[i].provider_id}
							hospital_name={hospitals[i].hospital_name}
							hospital_type={hospitals[i].hospital_type}
							hospital_rating={hospitals[i].hospital_overall_rating}
							hospital_address={hospitals[i].location_address}
							hospital_city={hospitals[i].city.toLowerCase()}
							hospital_state={hospitals[i].location_state}
							hospital_phone_number={hospitals[i].phone_number}
							hospital_mortality={hospitals[i].mortality_national_comparison}
							hospital_ownership={hospitals[i].hospital_ownership}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
