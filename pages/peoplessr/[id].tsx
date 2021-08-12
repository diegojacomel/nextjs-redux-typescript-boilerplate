// React
import React from 'react'

// Next
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params

  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  const data = await response.json()

  return {
    props: {
      people: data
    }
  }
}

interface PeopleTypes {
  name: string
  height: string
  mass: string
  gender: string
}

interface PropTypes {
  people: PeopleTypes
}

const PeopleSsr: React.FC<PropTypes> = ({ people }) => {
  return (
    <div data-testid="people">
      <p>Get Server Side Props</p>
      <div>
        <strong>Name:</strong> {people.name}
      </div>
      <div>
        <strong>Height:</strong> {people.height}
      </div>
      <div>
        <strong>Weight:</strong> {people.mass}
      </div>
      <div>
        <strong>Gender:</strong> {people.gender}
      </div>
    </div>
  )
}

export default PeopleSsr
