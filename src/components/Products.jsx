import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileView: false
    };
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ isMobileView: true });
    } else {
      this.setState({ isMobileView: false });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg
                style={{ height: 170, width: 245 }}
                src="uploads/desk.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Blog000 Title #1</CardTitle>
                <CardText className="cardText">
                  {" "}
                  Blog excerpt - first lines - for approx two lines
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                style={{ height: 170, width: 245 }}
                src="uploads/desk.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Blog000 Title #1</CardTitle>
                <CardText>
                  Blog excerpt - first lines - for approx two lines
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {!this.state.isMobileView && (
            <Col>
              <Card>
                <CardImg
                  style={{ height: 170, width: 245 }}
                  src="uploads/desk.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Blog000 Title #1</CardTitle>
                  <CardText>
                    Blog excerpt - first lines - for approx two lines
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          )}
          {!this.state.isMobileView && (
            <Col>
              <Card>
                <CardImg
                  style={{ height: 170, width: 245 }}
                  src="uploads/desk.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Blog000 Title #1</CardTitle>
                  <CardText>
                    Blog excerpt - first lines - for approx two lines
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default Products;
