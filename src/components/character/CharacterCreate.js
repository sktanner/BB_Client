<<<<<<< HEAD
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core';

<form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
=======
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link
} from '@material-ui/core';


const CharacterCreate = (props) => {
    const [name, setName] = useState('')
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
        console.log(name, race, gender, age, alignment, profession, trait)
        fetch('http://localhost:3000/character/create', {
            method: 'POST',
            body: JSON.stringify({
                character: {
                    name: name,
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
                console.log(logData)
                setName('')
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
>>>>>>> 0ebc78753ed6a331dd4afedb187f46a42bd0c812
