import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return <div className="ui cards">{this.props.pets.map(pet =>
      <div key={pet.id}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>
    )}</div>
  }
}

export default PetBrowser
