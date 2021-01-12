import React from 'react'
import { ListingPage } from './Components'

const endPoint = 'https://swapi.dev/api/people';

const People = () => {
  return (
    <ListingPage url={endPoint} />
  )
}

export default People;