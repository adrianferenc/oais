import { useState } from 'react';
import { useHistory } from 'react-router';
import { searchResult } from '../../utilities/sequences-api';
import { Form, Button, Col, Row } from "react-bootstrap";

export default function SearchForm({ width, setSequence }) {
  const [query, setQuery] = useState('');
  let history = useHistory();

  function handleChange(evt) {
    setQuery(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (query !== '') {
      const search = await searchResult(query.replace(/[a-zA-Z]*/g, '').padStart(6, "0"));
      setSequence({ sequenceId: query.replace(/[a-zA-Z]*/g, ''), sequence: search, options: { sequenceName: `{A${query.padStart(6, "0")}}` } });
    } else {
      setSequence({
        sequenceId: '',
        sequence: [],
        options: {
          viewStart: 0,
          width: width,
        },
      })
    }
    history.push('/')
  }

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Row className="d-flex align-items-end">
        <Form.Group controlId="searchBar">
          <Form.Control size="sm" type="text" name="search" value={query} placeholder="Try 45" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formButton">
          <Button size="sm" type="submit">SEARCH</Button>
        </Form.Group>
      </Row>
    </Form>
  );
}