
import { useState } from 'react';
import { useHistory } from 'react-router';
import { signUp } from '../../utilities/users-service';

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
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={signUpData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={signUpData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={signUpData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={signUpData.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={signUpData.password !== signUpData.confirm}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{signUpData.error}</p>
        </div>
    );
}