import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { modalclose } from '../actions';
import { resourceUpdate } from '../actions/resourceUpdate';
import {
    useParams,
  } from "react-router-dom";

function ResForm () {
    let { id } = useParams();
    const [tema, setTema] = useState("");
    const [desc, setDesc] = useState("");
    const [link, setLink] = useState("www.");
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (tema !== '' && desc !== '')
        dispatch(modalclose())
        const tempObject = {
            tema,
            desc,
            link,
        }
        dispatch(resourceUpdate(id, 'new', tempObject))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="ControlInput1">
                <Form.Label>Tema</Form.Label>
                <Form.Control value={tema} onChange={e => setTema(e.target.value)} type="text" placeholder="Hvilket tema?" required />
            </Form.Group>
            <Form.Group controlId="ControlTextarea1">
                <Form.Label>Beskrivelse</Form.Label>
                <Form.Control value={desc} onChange={e => setDesc(e.target.value)} as="textarea" rows="3" required />
            </Form.Group>
            <Form.Group controlId="ControlInput2">
                <Form.Label>Lenke</Form.Label>
                <Form.Control value={link} onChange={e => setLink(e.target.value)} type="text" placeholder="Lenke til ressurs" required />
            </Form.Group>
            <Button variant="success" type="submit">
                Legg til ressurs
            </Button>
        </Form>
    );
}

export default ResForm;
