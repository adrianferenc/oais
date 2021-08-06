import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from "../../components/LoginForm/LoginForm"
import './AuthPage.css'

export default function AuthPage({ setUser, auth, setAuth }) {
  return (
    <div className="AuthPage">
      <h1>{auth ? 'Sign Up' : 'Login'}</h1>
      <div className='login-signup-form'>
        {auth && <SignUpForm setUser={setUser} />}
        {auth || <LoginForm setUser={setUser} />}
      </div>
      <button className='login-signup-button' onClick={() => setAuth(!auth)}> {`${auth ? 'Login' : 'Sign Up'} Instead`} </button>
    </div>
  );
}