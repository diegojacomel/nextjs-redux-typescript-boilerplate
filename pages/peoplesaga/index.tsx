// React
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../redux/store'

interface PersonTypes {
  name: string
  height: string
  mass: string
  gender: string
}

const People: React.FC = () => {
  // State
  const [id, setId] = useState(null)

  // Redux
  const dispatch = useDispatch<AppDispatch>()
  const { name, height, mass, gender }: PersonTypes = useSelector(
    (state: RootState) => state.example.data
  )

  const handleChange = e => {
    setId(e.target.value)
  }

  const handleClick = () => {
    dispatch({
      type: 'GET_EXAMPLE_REQUEST',
      payload: {
        id
      }
    })
  }

  return (
    <div data-testid="people">
      <input
        placeholder="Type the Github username here"
        onChange={handleChange}
        style={{ width: '300px' }}
      />
      <button onClick={handleClick}>Click to get user data</button>
      <div>
        <p>Redux</p>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Height:</strong> {height}
        </div>
        <div>
          <strong>Weight:</strong> {mass}
        </div>
        <div>
          <strong>Gender:</strong> {gender}
        </div>
      </div>
    </div>
  )
}

export default People
