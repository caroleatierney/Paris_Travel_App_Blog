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
// Main Functional Component
export default function SearchForm() {
    // console.clear();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [results, setResults] = useState(null);
    const [destinations, setDestinations] = useState([]);
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // The following code is used to fetch data from the Here API
    async function searchHereApi(selectedCategory, limit = 5) {
        const BASE_URL = `https://discover.search.hereapi.com/v1/discover/in=circle:48.864716,2.349014;r=150limit=${limit}lang=en&q=${selectedCategory}`
        // console.log("category1: " + category1);
        const URL = BASE_URL + "apiKey=" + process.env.REACT_APP_API_KEY;
        // console.log("url: " + URL);
        console.log(URL)

        const res = await fetch('https://discover.search.hereapi.com/v1/discover?in=circle:48.864716,2.349014;r=150&limit=5&lang=en&q=business%20and%20services&apiKey=yreqyHh2IHFd-e4AvuS2QHUYHm1FSKV5wKJUNGS38lc')
      const data = await res.json()

      data.items.forEach(item => {
        fetch(MOCK_API_URL, {
            method: "POST",
            body: JSON.stringify({...item, rating: 0}),
            headers: {"Content-Type":"application/json"}
        })
      })

        



    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // when a category is chosen, get the data from HereAPI
    // write to MockAPI
    // retrieve from MockAPI
    const handleChange = event => {
        console.log(event.target.value)
        setSelectedCategory(event.target.value);
        searchHereApi(event.target.value);
        // fetchHereResults();
        getAndPostToMockAPI();
        console.log("selected Category" + selectedCategory);
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // this function goes out to MockAPI, and deletes all data then redisplays
    const clearSearch = () => {
        // fetch(MOCK_API_URL + "/", {
        //         method: 'DELETE',
        // }).then(() => getDestinations())
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // this function goes out to the MockAPI, and gets all data
    // converts it to json and sets the state with set destinationData(data)
    function getDestinations() {
        fetch(MOCK_API_URL)
            .then((data) => data.json())
            .then((data) => {
                setDestinations(data)
                console.log(data)
            })

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
        // display data from MockAPI
        //*** data in destinations but not displaying */
        return (
            <ul>
                {destinations.map((destination, index) => (
                    <div key={index}>
                        <h5>{destination.title}</h5>
                        <h5>{destination.houseNumber}</h5>
                        <h5>{destination.street}</h5>
                        <h5>{destination.city}</h5>
                        <h5>{destination.state}</h5>
                        <h5>{destination.postalCode}</h5>
                        <h5>{destination.country}</h5>
                        <h5>{destination.name}</h5>
                        <h5>{destination.phone}</h5>
                        <hr></hr>
                    </div>
                ))}
            </ul>
        )
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // get data from HereAPI and write results of search to MockAPI
    function getAndPostToMockAPI() {
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

                console.log("in here")

                // Once information is received from API, add it to MockAPI to allow for CRUD operations
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
                getDestinations()
        } else {
            <div>Loading...</div>
        }
    }
    }

    return (
        <div className="search">
            <h1>Search for things to do</h1>
            <h3>Note Both search options have a 150 xx radius around Paris</h3>
            <div>
                <button type="button" onClick={clearSearch} >Clear Search Results</button>
            </div>
            <div className="Container d-flex flex-row">
                <div className="row">
                    <div className="col-12">

                        <select value={selectedCategory} onChange={e => handleChange(e)}>
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