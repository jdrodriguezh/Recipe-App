import React, { PureComponent } from "react";
import { Container } from "reactstrap";
import HeaderLayout from "../Layouts/HeaderLayout";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <HeaderLayout>
        <Container fluid>
          <p>wenas</p>
        </Container>
      </HeaderLayout>
    );
  }
}

export default Home;
