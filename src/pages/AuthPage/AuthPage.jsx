import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from "../../components/LoginForm/LoginForm"
import {Card, Nav} from "react-bootstrap";

export default function AuthPage({ setUser, auth, setAuth }) {
  return (
    <Card>
  <Card.Header>
    <Nav fill variant="tabs" defaultActiveKey="#signup">
      <Nav.Item>
        <Nav.Link href="#signup" onClick={() => setAuth(true)}>Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#login" onClick={() => setAuth(false)}>Log In</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
      {auth? <SignUpForm setUser={setUser} />: <LoginForm setUser={setUser} />}
  </Card.Body>
</Card>

  );
}