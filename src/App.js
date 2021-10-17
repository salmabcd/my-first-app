import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container, Row, Col} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row> 
            <Col md>
              <Form.Group controlId= "formEmail">
                <Form.Label> E-mail Adress</Form.Label>
                <Form.Control type="email" placeholder= "Examplel@email.com" />
                <Form.Text className="text-muted">
                  We'll never share your e-mail Adress . Trust us !
                </Form.Text>
              </Form.Group>
          </Col>
          <Col md>
              <Form.Group controlId= "formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password" placeholder= "Password" />
              </Form.Group>
          </Col>
          </Row>
        </Form>
        <Button variant= "secondary" type= "submit"> Login</Button>
  
        </Container>
      </header>
    </div>
  );
}

export default App;
