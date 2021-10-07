import { Link } from "react-router-dom";
import { checkToken } from '../../utilities/users-service';
import { searchResult } from '../../utilities/sequences-api';
import DeleteFavoriteButton from '../../components/DeleteFavoriteButton/DeleteFavoriteButton'
import RenameFavoriteButton from "../../components/RenameFavoriteButton/RenameFavoriteButton";
import { Card, ListGroup, ButtonGroup } from "react-bootstrap";
// import './Profile.css'

export default function Profile({ user, setUser, setSequence }) {

  async function handleCheckToken() {
    const dateExp = await checkToken()
  }

  async function getSequence(query) {
    const search = await searchResult(query.padStart(6, "0"));
    setSequence({ sequenceId: query, sequence: search, options: { sequenceName: `A${query.padStart(6, "0")}` } })
  }

  return (
    <Card className="text-center">
      <Card.Header>Welcome {`${(user && user.name)[0].toUpperCase()}${(user && user.name).slice(1)}`}</Card.Header>
      <Card.Body>
        <Card.Title>Favorite Sequences</Card.Title>

        <ListGroup >
          {user.favorites.map((sequence, idx) => {
            return (
              <ListGroup.Item className='favorite' key={idx}>
                <Link to="/#" onClick={() => getSequence(sequence.sequenceId)}> {sequence.options.sequenceName}</Link>
                <ButtonGroup className='favorite-buttons'>
                  <RenameFavoriteButton user={user} sequence={sequence} setUser={setUser} />
                  <div className='spacer' />
                  <DeleteFavoriteButton sequenceId={sequence.sequenceId} setUser={setUser} />
                </ButtonGroup>
              </ListGroup.Item>
            )
          })
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}