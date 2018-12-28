import * as React from 'react';
import {ListGroupItem, InputGroup} from 'react-bootstrap';
import stars from '../reducers/star-svgs';
import './listItem.css';

interface IProps {
    title:string,
    desc: string,
    time: number
}

interface IState {
    isFavorite: boolean,
    isChecked: boolean
}

export default class Dashboard extends React.Component<IProps, IState> {

    state:IState = {
        isFavorite: false,
        isChecked: false
    };

    handleFavorite() {
        this.setState(prevState => ({
            isFavorite: !prevState.isFavorite
        }));
    }

    handleTime(time) {
        if (time < 7) {
            return time + (time === 1 ? ' day': ' days');
        } else {
            time = Math.round(time/7);
            if (time < 4) {
                return time + (time === 1 ? ' week': ' weeks');
            } else {
                time = Math.round(time/4);
                if (time < 12) {
                    return time + (time === 1 ? ' month': ' months');
                } else {
                    time = Math.round(time/12);
                    return time + (time === 1 ? ' year': ' years');
                }
            }
        }
    }

    render() {

        return (
            <div>
                <InputGroup className="item">
                    <InputGroup.Addon>
                        <input type="checkbox" />
                    </InputGroup.Addon>
                    <InputGroup.Addon onClick={this.handleFavorite.bind(this)}>
                        <svg data-prefix="far" data-icon="star"
                             className="star" role="img" viewBox="0 0 576 512">
                            <path fill="#ffcc00" d={this.state.isFavorite ? stars.solid : stars.regular}/>
                        </svg>
                    </InputGroup.Addon>
                        <ListGroupItem className="col-1" ><label className="name">{this.props.title}</label></ListGroupItem>
                        <ListGroupItem className="col-2" ><label className="desc">{this.props.desc}</label></ListGroupItem>
                        <ListGroupItem className="col-3" >{this.handleTime(this.props.time)}</ListGroupItem>
                </InputGroup>
            </div>
        );
    }
}