import { useState } from 'react';
import { useHistory } from 'react-router';
import { searchResult } from '../../utilities/sequences-api';
import { FormControl, Button, Col, Row } from "react-bootstrap";

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
    <Row>
      <Col>
        <FormControl size="sm" type="text" name="search" value={query} placeholder="Try 45" onChange={handleChange} />
      </Col>
      <Col>
        <Button disabled={query===''} size="sm" onClick={handleSubmit}>Search</Button>
      </Col>
    </Row>
  );
}