import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const mapStateToProps = state => {
    const { isPending, robots, error } = state.requestRobots;
    return {
        searchText: state.searchRobots.searchField,
        isPending,
        robots,
        error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: e => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         // searchText: '',
    //         robots: []
    //     };
    // }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         this.setState({ robots: users });
        //     });
        // console.log('componentDidMount');
        this.props.onRequestRobots();
    }
    // onSearchChange = e => {
    //     this.setState({ searchText: e.target.value });
    // };

    render() {
        const { searchText, onSearchChange, isPending, robots } = this.props;
        // console.log(searchText);
        // const { robots } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.includes(searchText);
        });
        return isPending ? (
            <h1>Loading</h1>
        ) : (
            <div>
                <h1 className="f1">ROBOTS</h1>
                <SearchBox
                    searchText={searchText}
                    onSearchChange={onSearchChange}
                ></SearchBox>
                <Scroll>
                    <CardList robots={filteredRobots}></CardList>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
