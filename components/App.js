import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }

    this.changeType = this.changeType.bind(this)
    this.findPets = this.findPets.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  }

  changeType(type) {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  findPets() {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
    } else {
      fetch(`/api/pets?type=${ this.state.filters.type }`)
    }
  }

  adoptPet(pet) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, pet]
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={ this.state.filters } onChangeType={ this.changeType } onFindPetsClick={ this.findPets }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={ this.adoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
