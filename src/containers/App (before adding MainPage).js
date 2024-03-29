import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
// import { robots } from './robots';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //   }
  // }

  componentDidMount() {
    this.props.onRequestRobots();
    // fetch('http://jsonplaceholder.typicode.com/users')
    // .then(response => {
    //   return response.json();
    // })
    // .then(users => {
    //   this.setState({ robots: users })
    // })
  }

  render() {
    // const { searchField, onSearchChange } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if (isPending) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={ onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={ filteredRobots }/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);