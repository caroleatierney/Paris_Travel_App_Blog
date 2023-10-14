import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default class Stars extends Component {
    render() {
        return (
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating />
            </Box>
        );
    };
};