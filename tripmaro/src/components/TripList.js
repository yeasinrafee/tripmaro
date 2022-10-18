import {useState} from 'react';
import './TripList.css';
import { useFetch } from '../hooks/useFetch';

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips');
    const {data:trips, isPending} = useFetch(url);

  return (
    <div className='trip-list'>
        <h1>Trip List</h1>
        {isPending && (
            <div>
                <p>Loading....</p>
            </div>
        )}
        <ul>
            {trips && trips.map((trip) => (
                <li key={trip.id}>
                    <h2>{trip.title}</h2>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>
        <div className="filter">
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
