import * as React from 'react';
import Header from "./constants/Header";
import Dashboard from "./Pages/Dashboard";
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Dashboard/>
            </div>
        );
    }
}
