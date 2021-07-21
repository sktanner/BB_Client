import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap'
// import { makeStyles } from '@material-ui/core/styles'
// import {
//     FormControl,
//     InputLabel,
//     Input,
//     Button,
//     Typography,
//     Link,
//     TextField,
//     Container,
//     Select,
//     MenuItem
// } from '@material-ui/core';
import Name from './Name';
import RandChar from './RandChar';

{/* <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form> */}


const CharacterCreate = (props) => {
    const [randName, setRandName] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [race, setRace] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [alignment, setAlignment] = useState('')
    const [profession, setProfession] = useState('')
    const [trait, setTrait] = useState('')
    //Randomizer props
    // const [randRace, setRandRace] = useState('')
    // const [randGender, setRandGender] = useState('')
    // const [randAge, setRandAge] = useState('')
    // const [randAlignment, setRandAlignment] = useState('')


    // const useStyles = makeStyles(() => ({
    //     root: {
    //         marginBottom: '10px',
    //         color: 'white',
    //     },
    //     button: {
    //         marginTop: '10px',
    //     }

    // }))

    // const classes = useStyles();

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
                console.log(logData)
                // setName('')
                // setLocation('')
                // setRace('')
                // setGender('')
                // setAge('')
                // setAlignment('')
                // setProfession('')
                // setTrait('')
                props.fetchCharacters()
            })
    }

    return (
        <Container id="createTable">
            <h3 id="createTitle">Create a Character</h3>
            <hr />
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Name randName =  {randName} setRandName = {setRandName} />
                </FormGroup>
                {/* <FormGroup row>
                    <RandChar />
                </FormGroup> */}
                <FormGroup row>
                    <Label htmlFor="name" sm={4}>Name:</Label>
                    <Col sm={8}>
                        <Input name="name" placeholder="Name" value={randName} onChange={(e) => setRandName(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="location" sm={4}>Location:</Label>
                    <Col sm={8}>
                        <Input name="location" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="race" sm={4}>Race:</Label>
                    <Col sm={8}>
                        <Input type="select" name="race" value={race} onChange={(e) => setRace(e.target.value)}>
                            <option></option>
                            <option value="Dragonborn">Dragonborn</option>
                            <option value="Dwarf">Dwarf</option>
                            <option value="Elf">Elf</option>
                            <option value="Gnome">Gnome</option>
                            <option value="Half-Elf">Half-Elf</option>
                            <option value="Halfling">Halfling</option>
                            <option value="Half-Orc">Half-Orc</option>
                            <option value="Human">Human</option>
                            <option value="Tiefling">Tiefling</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="gender" sm={4}>Gender:</Label>
                    <Col sm={8}>
                        <Input type="select" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option></option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Nonbinary">Nonbinary</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="age" sm={4}>Age:</Label>
                    <Col sm={8}>
                        <Input type="select" name="age" value={age} onChange={(e) => setAge(e.target.value)}>
                            <option></option>
                            <option value="Child">Child</option>
                            <option value="Young Adult">Young Adult</option>
                            <option value="Adult">Adult</option>
                            <option value="Elder">Elder</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="alignment" sm={4}>Alignment:</Label>
                    <Col sm={8}>
                        <Input type="select" name="alignment" value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                            <option></option>
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">Lawful Neutral</option>
                            <option value="True Neutral">True Neutral</option>
                            <option value="Chaotic Neutral">Chaotic Neutral</option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="profession" sm={4}>Profession:</Label>
                    <Col sm={8}>
                        <Input name="profession" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="trait" sm={4}>Trait:</Label>
                    <Col sm={8}>
                        <Input name="trait" placeholder="Trait" value={trait} onChange={(e) => setTrait(e.target.value)} />
                    </Col>
                </FormGroup>
                <div class="text-center">
                    <Button type="submit" color="danger">Generate</Button>
                </div>
            </Form>
        </Container>




        // <div>
        // <h1>Create</h1>
        // <form onSubmit={handleSubmit}>
        //     <FormControl>
        //         <InputLabel htmlFor="name" className={classes.root}>Name</InputLabel>
        //         <Input className={classes.root} id="name" value={name} onChange={(e) => setName(e.target.value)} />
        //     </FormControl>
        //     <FormControl>
        //         <InputLabel htmlFor="location" className={classes.root}>Location</InputLabel>
        //         <Input className={classes.root} id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        //     </FormControl>
        //     <FormControl>
        //         <InputLabel htmlFor="race" className={classes.root}>Race</InputLabel>
        //         <Select className={classes.root} id="race" value={races} onChange={(e) => setRace(e.target.value)} />
        //         <MenuItem value={Dwarf}>Dwarf</MenuItem>
        //         <MenuItem value={Elf}>Elf</MenuItem>
        //         <MenuItem value={Human}>Human</MenuItem>
        //     </FormControl>
        //     <Button type="submit" className={classes.button} variant="contained">Submit</Button>
        //     <br />
        //     <Name />
        //     </form>
        // </div>
    )
}

export default CharacterCreate