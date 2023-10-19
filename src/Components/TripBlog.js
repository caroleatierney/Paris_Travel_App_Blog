// This will display our posts
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TripBlogHeader from "./TripBlogHeader";
import Posts from "./Posts";
import SideBar from "./SideBar";

import './TripBlog.css';
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function TripBlog() {
    return (
        <>
            <TripBlogHeader />
            <Container>
                <Row justify-content-left>
                    <Col md={8}>
                        <Posts />
                    </Col>
                    
                    <Col md={4}>
                        <SideBar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}