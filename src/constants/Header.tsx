import * as React from 'react';
import {Glyphicon, ProgressBar, Button, FormGroup, Label, FormControl} from 'react-bootstrap';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Button bsStyle="success" className="home" >
                        <Glyphicon className="icon" glyph="home"/>
                    </Button>

                    <Label bsStyle="success" className="page">Dashboard</Label>

                    <Button bsStyle="success" className="add" >
                        <Glyphicon className="icon" glyph="plus"/>
                    </Button>

                    <Label bsStyle="success" className="logo">
                        <Glyphicon className="icon" glyph="check"/>
                        <h1>Project Manager</h1>
                    </Label>

                    <Button bsStyle="success" className="settings" >
                        <Glyphicon className="icon" glyph="cog"/>
                    </Button>

                    <div className="search" >
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" className="search-textfield" />
                        </FormGroup>
                        <Button bsStyle="success" className="search-button">
                            <Glyphicon className="icon" glyph="search"/>
                        </Button>
                    </div>
                </div>
                <div className="progress">
                    <ProgressBar striped active bsStyle="success" now={50} />
                </div>
            </div>
        );
    }
}