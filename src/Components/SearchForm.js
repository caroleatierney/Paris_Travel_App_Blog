import React, { useState } from 'react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// This is the array of objects for user to select a category from
const options = [
    { text: 'Eat and Drink', value: 'eat%20and%20drink' },
    { text: 'Going Out - Entertainment', value: 'going%20out%20-%20entertainment' },
    { text: 'Sights and Museums', value: 'sights%20and%20museums' },
    { text: 'Natural and Geographical', value: 'natural%20and%20geographical' },
    { text: 'Transport', value: 'transport' },
    { text: 'Accommodations', value: 'accommodations' },
    { text: 'Leisure and Outdoor', value: 'leisure%20and%20outdoor' },
    { text: 'Shopping', value: 'shopping' },
    { text: 'Business and Services', value: 'business%20and%20services' },
    { text: 'Facilities', value: 'facilities' },
    { text: 'Areas and Buildings', value: 'areas%20and%20buildings' },
];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// object used to store destination preset to blank
let destInfo = {
    title: '',
    houseNumber: '',
    street: '',    city: '',
    state: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    category: ''
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default function SearchForm() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [results, setResults] = useState(null);

    const handleChange = event => {
        setSelectedCategory(event.target.value);
        searchHereApi()
        console.log("selected Category" + selectedCategory)
    };

    // const clearSearch = event => {
    //     resultList = [];
    //     setResults(resultList)
    // };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    function searchHereApi() {
        // The following code is used to fetch data from the Here API
        const BASE_URL = "https://discover.search.hereapi.com/";
        const version = "v1";
        const service = "discover";
        const location = "in=circle:48.864716,2.349014;r=150";
        const limit = "limit=5";
        const language = "lang=en";
        const category1 = "q=" + selectedCategory;
        console.log("category1: " + category1);

        const URL = (BASE_URL + version + "/" + service + "?" + location + "&" + limit + "&" + language + "&" + category1 + "&" + "apiKey=" + process.env.REACT_APP_API_KEY);

        console.log("url: " + URL);
    }

    // fetch call to Here API
    const fetchHereResults = async () => {
        const resp = await fetch(URL);

        // assign variable to response's object
        // response is an object with an array in it
        const resultList = await resp.json();
        console.log("result list: " + resultList)

        // assign variable to response object's results 
        setResults(resultList.items)
        console.log("results: " + results)

        if (results) {

            // Once information is received from API, add it to MockAPI to allow for CRUD operations
            const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'
            results.map((result, index) => (
                destInfo.title = result.title,
                destInfo.houseNumber = result.address.houseNumber,
                destInfo.street = result.address.street,
                destInfo.city = result.address.city,
                destInfo.state = result.address.state,
                destInfo.postalCode = result.address.postalCode,
                destInfo.country = result.address.country,
                destInfo.country = result.address.country ?? '',
                destInfo.phoneNumber = result.contacts?.[0]?.phone?.[0]?.value ?? '',
                destInfo.category = result.categories[0].name,

                fetch(MOCK_API_URL, {
                    method: 'POST',
                    headers:
                    {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(destInfo),
                })
            ))

            {/* <div>
                <button type="button" onClick={clearSearch} >Clear Search Results</button>
            </div> */}

            {
                results.map((result, index) => (
                    <div key={index}>
                        <h5>{result.title}</h5>
                        <h5>{result.address.houseNumber}</h5>
                        <h5>{result.address.street}</h5>
                        <h5>{result.address.city}</h5>
                        <h5>{result.address.state}</h5>
                        <h5>{result.address.postalCode}</h5>
                        <h5>{result.address.country}</h5>
                        <h5>{result.categories[0].name}</h5>
                        {result.contacts?.[0]?.phone?.[0]?.value && <h5>{result.contacts[0].phone[0].value}</h5>}
                        <hr></hr>
                    </div>
                ))
            }

        } else {
            <div>Loading...</div>
        }
    }

    return (
        <div className="search">
            <h1>Search for things to do</h1>
            <h3>Note Both search options have a 150 xx radius around Paris</h3>

            <div className="Container d-flex flex-row">
                <div className="row">
                    <div className="col-12">

                        <select value={selectedCategory} onChange={handleChange}>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>

                        <p>selectedCategory: {selectedCategory}</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
};