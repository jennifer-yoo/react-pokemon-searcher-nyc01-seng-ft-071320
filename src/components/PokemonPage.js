import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    array : [],
    search: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => {
      this.setState(() => ({array: data}))
    })
  }

  changeHandler = (e) => {
    e.persist()
    this.setState({[e.target.name]: e.target.value })
  }

  searchResults = () => {
    return this.state.array.filter(el => el.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  submitHandler = (e, obj) => {
    e.preventDefault()

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        hp: obj.hp,
        sprites: {
          front: obj.front,
          back: obj.back
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState((previousState) => ({array: [...previousState.array, data]}))
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search value={this.state.search} changeHandler={this.changeHandler}/>
        <br />
        <PokemonCollection array={this.searchResults()}/>
      </Container>
    )
  }
}

export default PokemonPage
