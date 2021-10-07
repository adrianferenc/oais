
import { useState } from 'react';
import { useHistory } from 'react-router';
import { signUp } from '../../utilities/users-service';
import { Form, Button } from "react-bootstrap";

export default function SignUpForm({ setUser }) {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    let history = useHistory();

    function handleChange(evt) {
        setSignUpData({
            ...signUpData,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const formData = { ...signUpData };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            setUser(user)
            history.push('/profile');
        } catch {
            setSignUpData({ ...signUpData, error: 'Sign Up Failed - Try Again' })
        }
    };

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" value={signUpData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={signUpData.password} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirm" value={signUpData.confirm} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={signUpData.password !== signUpData.confirm}>
                Sign Up
            </Button>
        </Form>
    );
}