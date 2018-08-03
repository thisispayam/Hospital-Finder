import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hospitals: [],
      searchfield:'',
      statefield:''

    }
  }

//from the react lifecycle methods which always runs after constructor
componentDidMount(){
  fetch('https://data.medicare.gov/resource/rbry-mqwu.json')
  .then(response => {
    return response.json();
  })
  .then(units => {
    this.setState({hospitals:units})
  })

}

  onSearchChange = (event) => {
    const search = { searchfield: event.target.value }
    this.setState(search)
  }
  onStateChange =(event) => {
    const state = { statefield: event.target.value }
    this.setState(state)
  }
  
  render() {
    const filteredHospitals = this.state.hospitals.filter( hospital => {
      return (
        hospital.hospital_name.toLowerCase().includes(this.state.searchfield.toLowerCase()) &&
        hospital.location_state.toLowerCase().includes(this.state.statefield.toLowerCase())
      );
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hospital Finder</h1>
          <Searchbox searchChange={this.onSearchChange} stateChange={this.onStateChange}/>
        </header>
        <CardList hospitals={filteredHospitals} />
      </div>
    );
  }
}

export default App;
