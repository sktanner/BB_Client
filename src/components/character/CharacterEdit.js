import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap'
//import material ui form

const CharacterEdit = (props) => {
    const [editName, setEditName] = useState(props.characterToUpdate.name)
    const [editLocation, setEditLocation] = useState(props.characterToUpdate.location)
    const [editRace, setEditRace] = useState(props.characterToUpdate.race)
    const [editGender, setEditGender] = useState(props.characterToUpdate.gender)
    const [editAge, setEditAge] = useState(props.characterToUpdate.age)
    const [editAlignment, setEditAlignment] = useState(props.characterToUpdate.alignment)
    const [editProfession, setEditProfession] = useState(props.characterToUpdate.profession)
    const [editTrait, setEditTrait] = useState(props.characterToUpdate.trait)

    const CharacterUpdate = (event, character) => {
        event.preventDefault()
        fetch(`http://localhost:3000/character/${props.characterToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {
                name: editName,
                location: editLocation,
                race: editRace,
                gender: editGender,
                age: editAge,
                alignment: editAlignment,
                profession: editProfession,
                trait: editTrait
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => {
            props.fetchCharacters()
            props.updateOff()
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Character</ModalHeader>
            <ModalBody>
                <Form onSubmit={CharacterUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="location">Edit Location:</Label>
                        <Input name="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race">Edit Race:</Label>
                        <Input name="race" value={editRace} onChange={(e) => setEditRace(e.target.value)}>
                            <option></option>
                            <option value="Elf">Elf</option>
                            <option value="Dwarf">Dwarf</option>
                            <option value="Human">Human</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Update the character!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default CharacterEdit