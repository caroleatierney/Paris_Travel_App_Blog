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
// Main Functional Component
export default function SearchDisplay() {
    // console.clear();
    const [selectedCategory, setSelectedCategory] = useState('');
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // The following code is used to fetch data from the Here API
    async function searchHereApi(selectedCategory, limit = 5) {

        const BASE_URL = `https://discover.search.hereapi.com/v1/discover?in=circle:48.864716,2.349014;r=150&limit=${limit}&lang=en&q=${selectedCategory}`
        const URL = BASE_URL + "&apiKey=" + process.env.REACT_APP_API_KEY;
        console.log("url:           " + URL);

        // const res = await fetch('https://discover.search.hereapi.com/v1/discover?in=circle:48.864716,2.349014;r=150&limit=5&lang=en&q=business%20and%20services&apiKey=yreqyHh2IHFd-e4AvuS2QHUYHm1FSKV5wKJUNGS38lc')

        const res = await fetch(URL)

        const data = await res.json()

        data.items.forEach(item => {
            fetch(MOCK_API_URL, {
                method: "POST",
                body: JSON.stringify(
                    {
                        title: item.title,
                        houseNumber: item.address.houseNumber,
                        street: item.address.street,
                        city: item.address.city,
                        state: item.address.state,
                        postalCode: item.address.postalCode,
                        country: item.address.country ?? '',
                        phone: item.contacts?.[0]?.phone?.[0]?.value ?? '',
                        category: item.categories[0].name,
                        rating: 0
                    }),
                headers: { "Content-Type": "application/json" }
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
            console.log("selected Category" + selectedCategory);
        };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Search fields
    return (
        <div className="search">
            <h1>Search for things to do</h1>
            <h3>Note Both search options have a 150 xx radius around Paris</h3>
            <div>
                {/* <button type="button" onClick={clearSearch} >Clear Search Results</button> */}
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