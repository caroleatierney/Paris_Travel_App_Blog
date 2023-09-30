import React, { useEffect, useState } from 'react';
// const env = require('./env');
export default function ApiSearch() {

    // https://discover.search.hereapi.com/v1/discover?in=circle:48.864716,2.349014;r=150&limit=15&lang=en&q=restaurant&apiKey="xxxx"

    const BASE_URL ="https://discover.search.hereapi.com/";
    const version = "v1";
    const service = "discover";
    const location = "in=circle:48.864716,2.349014;r=150";
    const limit="limit=15";
    const language = "lang=en";
    const category= "q=restaurant";
    // const test = process.env.API_KEY;
    // console.log("test "+test);
    // const apiKey = "apiKey="+API_KEY
    const URL = (BASE_URL+version+"/"+service+"?"+location+"&"+limit+"&"+language+"&"+category+"&"

    // console.log("line 14");
    // console.log(URL);

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [results, setResults] = useState([]);

    // fetch call to API
    const fetchResults = async () => {
        try {
            const resp = await fetch(URL);
            
            // assign variable to response's object
            // response is an object with an array in it
            const resultList = await resp.json();

            // assign variable to response object's results 
            setResults(resultList.items)
            console.log("results: " + results)

        } catch (error) {
            setIsError(true)
            console.log(error);
        }
        setIsLoading(false)
    };

    // This is the first fetch (useEffect Hook)
    useEffect(() => {
        fetchResults();
        // console.log("In useEffect")
    }, []);

    // let user know when there is a lag in API return
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    // let user know when there is an error frpom API
    if (isError) {
        return <h2>There was an error</h2>
    }

    // return a movie div to the App component with movie name, poster and trailor link
    return (
        <div>
            {results.map((result, index) => (
                <h1>{result.title}</h1>
            ))}
        </div>
    )
}