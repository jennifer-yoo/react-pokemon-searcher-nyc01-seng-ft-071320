import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    switch: false
  }

  imageSwitch = () => {
    this.setState((previousState) => ({switch: !previousState.switch}))
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.switch ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" onClick={this.imageSwitch}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
