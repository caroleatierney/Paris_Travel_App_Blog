import React, { useState } from 'react';
import Select from 'react-select';
import HereApiSearch from './HereApiSearch.js'

const categories = [
    { label: 'Eat and Drink', value: 100 },
    { label: 'Going Out - Entertainment', value: 200 },
    { label: 'Sights and Museums', value: 300 },
    { label: 'Natural and Geographical', value: 350 },
    { label: 'Transport', value: 400 },
    { label: 'Accommodations', value: 500 },
    { label: 'Leisure and Outdoor', value: 550 },
    { label: 'Shopping', value: 600 },
    { label: 'Business and Services', value: 700 },
    { label: 'Facilities', value: 800 },
    { label: 'Areas and Buildings', value: 900 },
];

export default function SearchForm() {
    const [selectedCategory, setSelectedCategory] = useState('');

    // this passes the dog id to the update component
    // so it can update the correct dog
    const passCategory = (selectedCategory) => {
        HereApiSearch(selectedCategory);
    };

    return (
        <div className="search">
            <h1>Search for things to do</h1>
            <h3>Note Both search options have a 150 xx radius around Paris</h3>

            <div className="Container d-flex flex-row">
                <div className="row">
                    <div className="col-12">
                       <Select
                            options={categories}
                            onChange={(event) => {
                                setSelectedCategory(event.value);
                                // passCategory={selectedCategory};
                            }}
                        /> 
                        <p>selectedCategory: {selectedCategory}</p>
                    </div>
                </div>
            </div>
            <HereApiSearch selectedCategory={selectedCategory} />
        </div>
    ); 
};