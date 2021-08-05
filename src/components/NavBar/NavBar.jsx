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
                        <Link to="/"><div className='oeis-logo oais-color'><div className='show-on-hover'>The&nbsp;</div>O<div className='show-on-hover'>nline&nbsp;</div>A<div className='show-on-hover'>tlas&nbsp;of&nbsp;</div>I<div className='show-on-hover'>nteger&nbsp;</div>S<div className='show-on-hover'>equences </div></div></Link>
                    </div >

                    <div className="spacer" />
                    <div className='navbar-items'>
                        <ul>
                            <li><SearchForm sequence={sequence} setSequence={setSequence} /></li>
                            {user ?
                                <>
                                    <li>Welcome, {`${(user && user.name)[0].toUpperCase()}${(user && user.name).slice(1)}`}</li>
                                    <li><Link to="/profile">View Profile</Link></li>
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