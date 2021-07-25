import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function AuthPage({setUser}) {
    return (
      <main className="AuthPage">
        <SignUpForm setUser = {setUser}/>
      </main>
    );
  }