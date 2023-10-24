// This will display our posts
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function SideBar() {
    return (
        <>
            <Container>
                <Row>
                    <span className="gray sideBarTitle">Trip Day</span>
                    <Col className="gray sideBarItem d-flex">
                        <ul className="sideBarList">
                            <li className="sideBarListItem">Day 1</li>
                            <li className="sideBarListItem">Day 2</li>
                            <li className="sideBarListItem">Day 3</li>
                            <li className="sideBarListItem">Day 4</li>
                            <li className="sideBarListItem">Day 5</li>
                            <li className="sideBarListItem">Day 6</li>
                            <li className="sideBarListItem">Day 7</li>
                            <li className="sideBarListItem">Day 8</li>
                            <li className="sideBarListItem">Day 7</li>
                            <li className="sideBarListItem">Day 8</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}