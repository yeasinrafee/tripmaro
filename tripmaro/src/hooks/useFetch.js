import { useState, useEffect } from "react";

export function useFetch(url) {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(false);
const [error, SetError] = useState(null);

useEffect(()=>{
    const fetchData = async ()=>{
        setIsPending(true);

        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(res.statusText);
            }
            const json = await res.json();

            setIsPending(false);
            setData(json);
            SetError(null);
        }catch(err){
            setIsPending(false);
            SetError('Could not fetch the tripList');
            console.log(err);
        }
        
    }
    fetchData();
}, [url]);

    return {data , isPending, error};
}
