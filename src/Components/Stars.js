// this is the stars component from material UI's rating componant
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default class Stars extends Component {

    // set default to zero
    constructor() {
        super()

        this.state = {
            value: 0
        }
    }

    // display the stars and update the value when it is clicked
    render() {
        return (
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating 
                    value={this.state.value}
                    onChange={(event, newValue) => {
                        this.setState({value: newValue})
                    }}/>
            </Box>
        );
    };
};