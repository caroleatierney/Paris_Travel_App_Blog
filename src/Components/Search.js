import React, { useState } from 'react';
import DisplayDestinations from './DisplayDestinations.js'
import Button from 'react-bootstrap/Button';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// This is the array of objects for user to select a category from
const options = [
    { text: 'Select a category', value: ''},
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
    const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [defaultCategory, setDefaultCategory] = useState('Select a Category');
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/destinations'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // fetch data from the Here API
    async function searchHereApi(selectedCategory, limit = 5) {

        const BASE_URL = `https://discover.search.hereapi.com/v1/discover?in=circle:48.864716,2.349014;r=150&limit=${limit}&lang=en&q=${selectedCategory}`
        const URL = BASE_URL + "&apiKey=" + process.env.REACT_APP_API_KEY;
        const res = await fetch(URL)
        const data = await res.json()

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
        // write Here data to MockAPI
        for (const item of data.items) {
            await fetch(MOCK_API_URL, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
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
                        notes: '',
                        rating: 0
                    }),
            });
        }
    }

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
        // when a category is chosen, get the data from HereAPI
        // then writte it to MockAPI
        // then read it from MockAPI and display it
        const handleChange = event => {
            console.log("handleEvent's event.target.value passed in:  " + event.target.value)
            setSelectedCategory(event.target.value);
            searchHereApi(event.target.value);
            setIsCategorySelected(true);
        };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // clear category name and set is selecetd to false when there is a new search
    const clearSearch = () => {
        setSelectedCategory("");
        setIsCategorySelected(false);
        clearMockAPI();
        setSelectedCategory(defaultCategory);
    };

    // delete all entities from MockAPI
    const clearMockAPI = async () => {
        // Get the list of all destinations from the MockAPI.
        const response = await fetch(MOCK_API_URL);
        const destinations = await response.json();

        // Delete each destination individually.
        for (const destination of destinations) {
            await fetch(MOCK_API_URL + "/" + destination.id, {
                method: 'DELETE'
            });
        }
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // Search fields
    return (
        <div className="search">
            <h2 className="vibes display-3 my-5">Search for things to do</h2>
            <h3 className="montserrat">Note Both search options have a 150 xx radius around Paris</h3>
            <h3 className="montserrat">All results are written to database</h3>

            <div className="Container d-flex flex-row justify-content-center py-5">
                <div className="row">
                    <div className="col">
                        <select className="montserrat mx-5 p-3 bg-secondary" style={{
                            color: 'black', textShadow: '1px 1px 1px #d97fb9f5', border: 'solid', borderWidth: '1px'
                        }} value={selectedCategory} onChange={e => handleChange(e)}>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>

                        <Button className="montserrat mx-5 p-3" style={{ color: 'black', textShadow: '1px 1px 1px #d97fb9f5', border: 'solid', borderWidth: '1px' }} variant="secondary" type ="button" onClick={clearSearch}>Clear Database</Button>

                        {isCategorySelected && <DisplayDestinations />}

                    </div>
                </div>
            </div>
        </div>
    ); 
};