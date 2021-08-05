import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({setUser, auth, setAuth}) {
    return (
      <div className="AuthPage">
        <h1>{auth ? 'Sign Up' : 'Login'}</h1>
          {auth && <SignUpForm setUser = {setUser}/>}
          {auth || <LoginForm setUser = {setUser}/>}
          <button onClick={() => setAuth(!auth)}> {auth ? 'Login' : 'Sign Up'} </button>
      </div>
    );
  }