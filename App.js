import { useState } from 'react'
import React from 'react'
import Persona from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
 

  const checkName = (name) => {
    let repeated = false

    persons.map((person) => {
      
      if (name === person.name) {
        repeated = true
      }

    })
    return repeated
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
    if  (checkName(personObject.name)) { 
      alert(`${newName} is already  inserted`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }

  const handleNameChange = (event) => {
    
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    
    <div>

      <h2>Phonebook</h2>
      
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange ={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>  person = <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
