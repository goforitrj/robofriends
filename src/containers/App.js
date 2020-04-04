import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
    state = {
        searchText: '',
        robots: []
    };
    // constructor() {
    //     super();
    //     this.state = {
    //         searchText: '',
    //         robots: []
    //     };
    //     console.log('constructor');
    // }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users });
            });
        console.log('componentDidMount');
    }
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    };
    render() {
        const { searchText, robots } = this.state;
        return !robots.length ? (
            <h1>Loading</h1>
        ) : (
            <div>
                <h1 className="f1">ROBOTS</h1>
                <SearchBox
                    searchText={searchText}
                    onSearchChange={this.onSearchChange}
                ></SearchBox>
                <Scroll>
                    <CardList
                        robots={robots.filter(robot => {
                            return robot.name.includes(searchText);
                        })}
                    ></CardList>
                </Scroll>
            </div>
        );
    }
}

export default App;
