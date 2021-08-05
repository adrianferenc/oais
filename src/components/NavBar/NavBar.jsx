import { Link } from "react-router-dom";
import SearchForm from '../../components/SearchForm/SearchForm'
import * as usersService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser, sequence, setSequence }) {

    function handleLogOut() {
        usersService.logOut();
        setUser(null);
    }

    return (
        <>
            <header className='navbar'>
                <nav className='navigation'>
                    <div className='navbar-logo' >
                        <Link to="/">OAIS</Link>
                    </div >

                    <div className="spacer" />
                    <div className='navbar-items'>
                        <ul>
                            <li><SearchForm sequence={sequence} setSequence={setSequence} /></li>
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

        </>
    )
}