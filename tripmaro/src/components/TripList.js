import {useCallback, useEffect, useState} from 'react';
import './TripList.css';

export default function TripList() {
    const [trips, setTrip] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/trips');

    const fetchTrip = useCallback(async ()=>{
        const response = await fetch(url);
        const json = await response.json();
        setTrip(json);
    }, [url]);

    useEffect(() =>{
        // fetch(url)
        // .then((res) => res.json())
        // .then(json => setTrip(json))
        fetchTrip();
    }, [fetchTrip]);

  return (
    <div className='trip-list'>
        <h1>Trip List</h1>
        <ul>
            {trips.map((trip) => (
                <li>
                    <h2>{trip.title}</h2>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>
        <div className="filer">
            <button
            onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
            >Europe</button>
            <button
            onClick={() => setUrl('http://localhost:3000/trips')}
            >All Trip</button>
        </div>
    </div>
  )
}
