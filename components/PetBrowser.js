import React from 'react'
import Pet from './Pet'

export default class PetBrowser extends React.Component {
  allPets() {
    return this.props.pets.map((pet)=> {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.adopted(pet)} />
    })
  }

  adopted(pet) {
    return this.props.adoptedPets.includes(pet.id)
  }

  render() {
    return (
      <div className="ui cards">
        { this.allPets() }
      </div>
    )
  }
}
