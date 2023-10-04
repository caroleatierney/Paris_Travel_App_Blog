import React, { useEffect, useState } from 'react';

export default function HereApiSearch({selectedCategory}) {
  
    // The following code is used to fetch data from the Here API
    const BASE_URL = "https://discover.search.hereapi.com/";
    const version = "v1";
    const service = "discover";
    const location = "in=circle:48.864716,2.349014;r=150";
    const limit = "limit=1";
    const language = "lang=en";
    const category1= "q=" + selectedCategory;
    console.log("category1: " + category1);

    const URL = (BASE_URL + version + "/" + service + "?" + location + "&" + limit + "&" + language + "&" + category1 + "&" + "apiKey=" + process.env.REACT_APP_API_KEY);

    console.log("url: " + URL);

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [results, setResults] = useState([]);

    // fetch call to Here API
    const fetchHereResults = async () => {
        try {
            const resp = await fetch(URL);

            // assign variable to response's object
            // response is an object with an array in it
            const resultList = await resp.json();
            console.log("result list: " + resultList)

            // assign variable to response object's results 
            setResults(resultList.items)
            console.log("results: " + results)

        } catch (error) {
            setIsError(true)
            console.log(error);
        }
        setIsLoading(false)
        
        // Once information is received from API, add it to MockAPI to allow for CRUD operations
        const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'
        results.map((result, index) => (
            fetch(MOCK_API_URL, {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: result.title,
                    houseNumber: result.houseNumber,
                    street: result.street,
                    city: result.city,
                    state: result.state,
                    postalCode: result.postalCode,
                    country: result.country,
                    // phoneNumber: result.contacts[0].phone[0].value,
                    category: result.categories[0].name
                }),
            })
        ))
    };

    // let user know when there is a lag in API return
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    // let user know when there is an error frpom API
    if (isError) {
        return <h2>There was an error</h2>
    }

    // return a result div to the App component
    return (
        <div>
            {results.map((result, index) => (
                <div key={index}>
                    <h5>{result.title}</h5>
                    <h5>{result.address.houseNumber}</h5>
                    <h5>{result.address.street}</h5>
                    <h5>{result.address.city}</h5>
                    <h5>{result.address.state}</h5>
                    <h5>{result.address.postalCode}</h5>
                    <h5>{result.address.country}</h5>
                    <h5>{result.categories[0].name}</h5>
                    {/* <h5>{result.contacts[0].phone[0].value}</h5> */}
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

// how to code if an object is not there 