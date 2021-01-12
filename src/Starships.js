import React from 'react'
import { ListingPage } from './Components'

const endPoint = 'https://swapi.dev/api/starships';

const Starships = () => {
  return (
    <ListingPage url={endPoint} />
  )
}

export default Starships;