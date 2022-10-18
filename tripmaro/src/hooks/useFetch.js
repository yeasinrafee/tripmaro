import { useState, useEffect } from "react";

export function useFetch(url) {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(false);
const [error, SetError] = useState(null);

useEffect(()=>{
    const controller = new AbortController();

    const fetchData = async ()=>{
        setIsPending(true);

        try{
            const res = await fetch(url, {signal: controller.signal});
            if(!res.ok){
                throw new Error(res.statusText);
            }
            const json = await res.json();

            setIsPending(false);
            setData(json);
            SetError(null);
        }catch(err){
            if(err.name === 'AbortError'){
                console.log('The fetch was aborted');
            }else{
                setIsPending(false);
                SetError('Could not fetch the tripList');
            }
        }
        
    }
    fetchData();

    return ()=>{
        controller.abort();
    }
}, [url]);

    return {data , isPending, error};
}
