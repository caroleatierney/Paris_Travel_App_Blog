import React, { useEffect, useState } from 'react';

export default function ApiSearch() {
    const BASE_URL ="https://discover.search.hereapi.com/";
    const version = "v1";
    const service = "discover";
    const location = "in=circle:48.864716,2.349014;r=150";
    const limit="limit=2";
    const language = "lang=en";
    const category= "q=restaurant";
    const URL = (BASE_URL + version + "/" + service + "?" + location + "&" + limit + "&" + language + "&" + category + "&" + "apiKey=" + process.env.REACT_APP_API_KEY); 

    console.log("url: " + URL);

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

    // Once information is received from API, add it to MockAPI to allow CRUD operations

    // const MOCK_API_URL = 'xxxxxx/Paris_APP/destinations'


    // results.map((result, index) => (
    //     fetch(MOCK_API_URL, {
    //         method: 'POST',
    //         headers:
    //         {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             title: result.title
    //         }),
    //     })
    // ))

    // return a movie div to the App component with movie name, poster and trailor link
    return (
        <div>
            {results.map((result, index) => (
                <h1>{result.title}</h1>
            ))}
        </div>
    )
}