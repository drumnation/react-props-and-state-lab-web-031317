import React from 'react'

export default class Pet extends React.Component {
  constructor() {
    super()
    this.adopt = this.adopt.bind(this)
  }

  adopt() {
    let id = this.props.pet.id
    return this.props.onAdoptPet(id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet.name} { this.props.pet.gender === 'male' ?  '♂' : '♀' } </a>
          <div className="meta">
            <span className="date">Pet type: { this.props.pet.type }</span>
          </div>
          <div className="description">
            <p>Age: { this.props.pet.age }</p>
            <p>Weight: { this.props.pet.weight }</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.isAdopted ? <button className="ui disabled button">Already Adopted</button> : <button className="ui primary button" onClick={ this.adopt }>Adopt pet</button> }
        </div>
      </div>
    )
  }
}
