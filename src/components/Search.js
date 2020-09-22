import React from 'react'

const Search = (props) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name="search" value={props.value} onChange={props.changeHandler}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
