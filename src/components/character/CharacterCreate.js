import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link,
    TextField,
    Container
} from '@material-ui/core';

{/* <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form> */}


const CharacterCreate = (props) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [race, setRace] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [alignment, setAlignment] = useState('')
    const [profession, setProfession] = useState('')
    const [trait, setTrait] = useState('')

    const useStyles = makeStyles(() => ({
        root: {
            marginBottom: '10px',
            color: 'white',
        },
        button: {
            marginTop: '10px',
        }
        
    }))

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, location, race, gender, age, alignment, profession, trait)
        fetch('http://localhost:3000/character/create', {
            method: 'POST',
            body: JSON.stringify({
                character: {
                    name: name,
                    location: location,
                    race: race,
                    gender: gender,
                    age: age,
                    alignment: alignment,
                    profession: profession,
                    trait: trait,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                // console.log(logData)
                setName('')
                setLocation('')
                setRace('')
                setGender('')
                setAge('')
                setAlignment('')
                setProfession('')
                setTrait('')
                props.fetchCharacters()
            })
    }


    return (
        <div>
        <h1>Create</h1>
        <form onSubmit={handleSubmit}>
            <FormControl className={classes.root}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name"  value={name} onChange={(e) => setName(e.target.value)}/>
            </FormControl>
            <FormControl className={classes.root}>
                <InputLabel htmlFor="race">Race</InputLabel>
                <Input id="name"  value={race} onChange={(e) => setRace(e.target.value)}/>
            </FormControl>
            <Button type="submit" className={classes.button} variant="contained">Submit</Button>
            </form>
        </div>
    )
}


export default CharacterCreate