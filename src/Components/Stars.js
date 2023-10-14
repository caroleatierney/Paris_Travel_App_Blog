import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default class Stars extends Component {

    constructor() {
        super()

        this.state = {
            value: 0
        }
    }

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