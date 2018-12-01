import React, { Component } from 'react';
import Data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardContainer.js';
import Search from './Search.js'
import './App.css';
import CompareCardContainer from './CompareCardContainer.js';


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {},
      compareCard1: null,
      compareCard2: null,
      middleCard: null,
      selectedCards: []
  }
}

  componentDidMount = () => {
    const districtRepository = new DistrictRepository(Data);
    this.setState({
      data: districtRepository.stats
    })
  }

  displaySearch = (searchValue) => {
    const districtRepository = new DistrictRepository(Data);
    const searchedSchoolsArr = districtRepository.findAllMatches(searchValue);
    let searchedSchoolsObj = searchedSchoolsArr.reduce((obj, currSchool) => {
      obj[currSchool] = districtRepository.stats[currSchool];
      return obj;
    }, {})
    this.setState({
      data: searchedSchoolsObj
    })
  }

  displaySelected = (card) => {
    const districtRepository = new DistrictRepository(Data);
    const selected = districtRepository.findByName(card.location);
    if (!this.state.compareCard1) {
      this.setState({
        compareCard1: selected
      })
    } else {
      this.setState({
      compareCard2: selected
    })
  }
}

  updateSelectedCards = (card) => {
    if (this.state.selectedCards.length < 2) {
      this.setState({
        selectedCards: [...this.state.selectedCards, card]
      })
    } else {
      let spliced = this.state.selectedCards.splice(this.state.selectedCards[0], 1)
      this.setState({
        selectedCards: spliced
      })
    }

}

  compareCards = (card1, card2) => {
    const districtRepository = new DistrictRepository(Data);
    const comparedAvg = districtRepository.compareDistrictAverages(card1, card2);
    return comparedAvg;
}

  render() {
    return (
      <div>
        <h1 className="header">HeadCount <span className="num">2.0</span></h1>
        <Search displaySearch={this.displaySearch} />
        <CompareCardContainer appState={this.state} compareCards={this.compareCards} />
        <CardContainer data={this.state.data} displaySelected={this.displaySelected} campareCard1={this.state.compareCard1} campareCard2={this.state.compareCard2} updateSelectedCards={this.updateSelectedCards} selectedCards={this.state.selectedCards}/>
      </div>

    );
  
}
}


export default App;
