import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({setUser, auth}) {
    return (
      <main className="AuthPage">
          {auth && <SignUpForm setUser = {setUser}/>}
          {auth || <LoginForm setUser = {setUser}/>}
      </main>
    );
  }