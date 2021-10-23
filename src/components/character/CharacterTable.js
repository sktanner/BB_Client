import React from 'react'
import {Table, Button} from 'reactstrap'
import APIURL from '../../helpers/environment'

const CharacterTable = (props) => {
  const deleteCharacter = (character) => {
    fetch(`${APIURL}/character/${character.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then(() => props.fetchCharacters())
  }

  const CharacterMapper = () => {
    console.log(props.character);
        return props.character.map((character, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{character.name}</th>
                    <td>{character.location}</td>
                    <td>{character.race}</td>
                    <td>{character.gender}</td>
                    <td>{character.age}</td>
                    <td>{character.alignment}</td>
                    <td>{character.profession}</td>
                    <td>{character.trait}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Edit</Button>
                        
                    </td>
                    <td>
                        <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
  }

  return(
    <>
    <Table hover id="charTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Race</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Alignment</th>
                <th>Profession</th>
                <th>Trait</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {CharacterMapper()}
        </tbody>
    </Table>
    </>
)
}

export default CharacterTable