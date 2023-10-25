// Component used to display our photos and posts 

import { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import AddPost from './AddPost.js'
import AddImage from './AddImage.js'
import UpdateImageTitle from './UpdateImageTitle.js'
import DeleteBlog from './DeleteBlog.js'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function TripBlog() {
    const [tripBlog, setTripBlog] = useState([]);
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // get all data from MockAPI
    const getTripBlog = async () => {
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setTripBlog(data);
        console.log(data)
    };

    // execute function to get the photos and blog
    useEffect(() => {
        getTripBlog();
    }, []);

    // this passes the blog id to the updateImageTitle component so it can update the correct blog
    // then reload new data
    const onUpdate = async (blogId) => {
        UpdateDestinationNotes(blogId);
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setTripBlog(data);
    };

    // this passes the blog id to the delete component so it can delete the correct destination
    // then reload new data
    const onDelete = async (blogId) => {
        DeleteBlog(blogId);
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setTripBlog(data);
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // display data from MockAPI

    return (
        <div className="DisplayBlog p-5 m-5" style={{ minHeight: '100%' }} >
            <AddImage getTripBlog={getTripBlog} />

            <Container className="m-10 p-5">
                <Row>
                    {tripBlog.map((blog, index) => (
                        <Col key={index} xs={4} className="d-inline-flex flex-row justify-content-around text-white">
                            <Card id="card" className="p-3 mb-2 text-center" style={{ width: '15vw', height: '30vw' }}>
                                <Card.Body>
                                    <Card.Title className="vibesSmMd" style={{ height: '7vh' }}>{blog.title}</Card.Title>
                                    <Card.Text className="p-3 mb-2
                                        text-center montserratSm">
                                        <Image
                                            className="d-block"
                                            src={blog.image}
                                            alt="{blog.title}"
                                            thumbnail
                                            fluid
                                        />
                                        <p>{blog.date}</p>

                                        {/* <p>{blog.blog}</p> */}
                                        <AddImage getTripBlog={getTripBlog} />
                                        <UpdateImageTitle blogId={blog.id} getTripBlog={getTripBlog} onUpdate={onUpdate} />
                                        <DeleteBlog blogId={blog.id} getTripBlog={getTripBlog} onDelete={onDelete} />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}