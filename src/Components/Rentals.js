import React, {useState} from 'react';
import Rental from './Rental';
import RentalsSearch from './RentalsSearch';
import db from '../Helpers/helpDataBase';

const Rentals = () => {
  const [ rentals, setRentals ] = useState( db );
  return(
    <section>
      <RentalsSearch 
      rentals={ rentals }
      setRentals={ setRentals }
      />
      <ol className='rentals__list'>
      { 
	rentals.length > 0 && 
	  rentals.map( rental =>{
	    const { 
	      id, 
	      img, 
	      placeName, 
	      owner, 
	      locationName, 
	      numberOfBedrooms: nob, 
	      placeType
	    } = rental;
	    return <Rental 
	    key={ id }
	    id={ id }
	    imgName={ img }
	    placeName={ placeName }
	    owner={ owner }
	    locationName={ locationName }
	    numberOfBedrooms={ nob }
	    placeType={ placeType }
	    />
	  })
      }
      </ol>
    </section>
  );
}

export default Rentals;
