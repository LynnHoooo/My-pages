import React from "react";
import Container from "react-bootstrap/Container";
import Sildebar from "./Sildebar";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import Picture from "./Pictures";



function Gallery() {
    return (
        <section>
            <Container fluid className="gallery-section" id="home">
                <Container className="gallery-content">
                    <Row className="gallery-wrap">
                        <h1 style={{}}>
                            My <strong className="purple">Art Works</strong>
                        </h1>
                        <Col md={12} className="gallery-column">
                            <Sildebar />
                        </Col>
                        <Col md={12} className="gallery-column">
                            <Picture />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Gallery;
