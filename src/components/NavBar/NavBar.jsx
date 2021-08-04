import { Link } from "react-router-dom";
import * as usersService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        usersService.logOut();
        setUser(null);
    }

    return (
        <header className='navbar'>
            <nav className='navigation'>
                <div >
                <Link to="/" className='navbar-logo'>OAIS</Link>
                </div >
                <div className = "spacer"/>
                <div className='navbar-items'>
                <ul>
                    {user ?
                        <>
                            <li>Welcome, {user && user.name}</li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
                        </>
                        :
                        <li><Link to="/signup">Sign Up/Login</Link></li>
                    }
                </ul>
                </div>
            </nav>
        </header>
    )
}