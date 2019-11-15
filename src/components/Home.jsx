import React from "react";
import { Container, Row, Col, CardImg, Button } from "reactstrap";
import Products from "../components/Products";
import CarouselComponent from "./Carousel";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="top_start_new_section">
            <Row>
              <Col>
                <h1 className="head">Start new... Today!</h1>
                <p className="paragraph">
                  Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
                  ipsum{" "}
                </p>
              </Col>
              <Col>
                <CardImg src="uploads/56256.jpg" alt="Card image cap" />
              </Col>
            </Row>
          </div>
          <div className="new_product_new_story_sectn">
            <h3 className="secondHeader">Lorem ipsum something</h3>
            <div className="subDivision">
              <Row>
                <Col>
                  <CardImg src="uploads/56217.jpg" alt="Card image cap" />
                </Col>
                <Col>
                  <h4>New Product, new Story</h4>
                  <p className="paragraph">
                    Vivamus vestibulum elit efficitur,elementum sapien a,
                    aliquet ipsum. Fusce placerat dolar id cursus finibus.
                    Aliquam tempus facilisis ipsum sit amet molestie. Proin
                    lobortis eros a trirpis tempor, sed ornare augue aliquam.
                    Donec imperdiet nulla ut placerat molestie. In hendrerit
                    blandit ante facilisus ultrices. Mauris vulputate metus sit
                    amet ex dignissim, sed hendrerit nunc rhoncus.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="firstDivision">
            <CarouselComponent />
          </div>
          <div className="blog_sectn">
            <Products />
          </div>
          <div className="buttonDiv">
            <Button className="button">Read more</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
