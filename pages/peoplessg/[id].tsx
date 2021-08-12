// React
import React from 'react'

// Next
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
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

const People: React.FC<PropTypes> = ({ people }) => {
  // Router
  const { isFallback } = useRouter()

  if (isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div data-testid="people">
      <p>Get Static Props</p>
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

export default People
