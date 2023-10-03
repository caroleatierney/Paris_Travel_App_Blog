import React, { useState } from 'react';
import Select from 'react-select';
import HereApiSearch from './HereApiSearch.js'

const categories = [
    { label: 'Eat and Drink', value: 'Eat%20and%20' },
    { label: 'Going Out - Entertainment', value: 'Going%20Out%20-%20Entertainment' },
    { label: 'Sights and Museums', value: 'Sights%20and%20Museums' },
    { label: 'Natural and Geographical', value: 'Natural%20and%20Geographical' },
    { label: 'Transport', value: 'Transport' },
    { label: 'Accommodations', value: 'Accommodations' },
    { label: 'Leisure and Outdoor', value: 'Leisure%20and%20Outdoor' },
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Business and Services', value: 'Business%20and%20Services' },
    { label: 'Facilities', value: 'Facilities' },
    { label: 'Areas and Buildings', value: 'Areas%20and%20Buildings' },
];

export default function SearchForm() {
    const [selectedCategory, setSelectedCategory] = useState('');

    // const passCategory = (selectedCategory) => {
    //     HereApiSearch(selectedCategory);
    // };

    return (
        <div className="search">
            <h1>Search for things to do</h1>
            <h3>Note Both search options have a 150 xx radius around Paris</h3>

            <div className="Container d-flex flex-row">
                <div className="row">
                    <div className="col-12">
                       <Select
                            options={categories}
                            onChange={(event) => setSelectedCategory(event.value)}value="selectedCategory"
                        />
                        <p>selectedCategory: {selectedCategory}</p>
                    </div>
                </div>
            </div>
            <HereApiSearch selectedCategory={selectedCategory} />
        </div>
    ); 
};

// Make it call only once, clear mockAPI button