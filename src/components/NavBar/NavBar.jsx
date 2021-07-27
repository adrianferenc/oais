import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/puppies">Puppy History</Link>
            &nbsp; | &nbsp;
            <Link to="/puppies/new">New Puppy</Link>
            &nbsp; | &nbsp;
            <Link to="/search">Search</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}