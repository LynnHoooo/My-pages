import React from "react";
import p1 from '../../Assets/Gallery/1.png';
import p2 from'../../Assets/Gallery/2.png';
import p3 from'../../Assets/Gallery/3.png';
import p4 from'../../Assets/Gallery/4.png';
import p5 from'../../Assets/Gallery/5.png';
import p6 from'../../Assets/Gallery/6.png';
import p7 from'../../Assets/Gallery/7.png';
import p8 from'../../Assets/Gallery/8.png';
import p9 from'../../Assets/Gallery/9.png';
import p10 from'../../Assets/Gallery/10.png';
import p11 from'../../Assets/Gallery/11.png';
import p12 from'../../Assets/Gallery/12.png';
import {Col, Row} from "react-bootstrap";


function Picture() {
    return (
        <div className="gallery-wrap">
            <Col md={4} className="gallery-column">
                <div className="gallery-item">
                    <img src={p11}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p1}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p3}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p4}
                             alt="col1" />
                </div>
            </Col>
            <Col md={4} className="gallery-column">
                <div className="gallery-item">
                    <img src={p10}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p6}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p12}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p8}
                             alt="col1" />
                </div>
            </Col>
            <Col md={4} className="gallery-column">
                <div className="gallery-item">
                    <img src={p9}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p7}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p5}
                             alt="col1" />
                </div>
                <div className="gallery-item">
                    <img src={p2}
                             alt="col1" />
                </div>
            </Col>
        </div>
    );
}

export default Picture;


