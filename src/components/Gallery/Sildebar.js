import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import p1 from  "../../Assets/Gallery/SlideBar/1.png"
import p2 from  "../../Assets/Gallery/SlideBar/2.png"
import p3 from  "../../Assets/Gallery/SlideBar/3.png"

function Sildebar() {
    return (
        <Carousel className="carousel">
            <Carousel.Item className="item">
                <img
                    className="carousel-img"
                    src={p1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="carousel-img"
                    src={p2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="carousel-img"
                    src={p3}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Sildebar;
