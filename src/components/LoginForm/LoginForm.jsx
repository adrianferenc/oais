import { useState } from 'react';
import { useHistory } from 'react-router';
import { login } from '../../utilities/users-service';
import { Form, Button } from "react-bootstrap";

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  let history = useHistory();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await login(credentials);
      setUser(user);
      history.push('/profile');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Log In
      </Button>
    </Form>
  );
}