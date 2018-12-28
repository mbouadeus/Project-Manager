import * as React from 'react';
import {Button, Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import ListItem from '../Components/ListItem';
import data from '../reducers/project-data';
import './dashboard.css';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="buttons clearfix">
                    <Button bsStyle="success" className="filter-button" >
                        <Glyphicon className="icon" glyph="filter" /> Sort
                    </Button>
                    <Button bsStyle="success" className="remove-button" >
                        <Glyphicon className="icon" glyph="remove" /> Remove
                    </Button>
                    <Button bsStyle="success" className="edit-button" >
                        <Glyphicon className="icon" glyph="pencil" /> Edit
                    </Button>
                    <Button bsStyle="success" className="add-button" >
                        <Glyphicon className="icon" glyph="plus" /> Add
                    </Button>

                </div>
                <ListGroup className="list">
                    <ListGroupItem bsStyle="success">Projects</ListGroupItem>
                    {data.map(project => {
                        return <ListItem {...project}/>
                    })}
                </ListGroup>
            </div>
        );
    }
}