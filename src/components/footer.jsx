import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer" style={{ background: "#4296cb", marginTop: 123 }}>
      <Container>
        <p>
          <img src="uploads/Logo (2).svg" alt="" /> All rights are reserved
          &copy;
        </p>
      </Container>
    </div>
  );
};

export default Footer;
