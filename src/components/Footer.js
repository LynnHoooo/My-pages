import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="footer-copyright">
        <h2>Live, travel, adventure, bless, and don't be sorry.</h2>
          <h3>🌟 Copyright © Lucy Ling {new Date().getFullYear()} 🌟️</h3>
      </div>
    </Container>
  );
}

export default Footer;
