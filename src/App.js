import GifGroup from './GifGroup';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import './styles.scss';

class App extends React.Component {
  render(){
    return <BreakpointProvider>
      <Container className="main">
        <Row noGutters={true}>
          <Col xs={12} sm={6} md={4} lg={3}>
            <GifGroup pagination={0} />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <GifGroup pagination={1} />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Breakpoint medium up>
              <GifGroup pagination={2} />
            </Breakpoint>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Breakpoint large up>
              <GifGroup pagination={3} />
            </Breakpoint>
          </Col>
        </Row>
      </Container>
    </BreakpointProvider>  
}
}

export default App;
