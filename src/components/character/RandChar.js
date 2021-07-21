import React, { useState } from 'react';
import { Button } from '@material-ui/core';


function RandomRace(props) {
    const race = race['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
    const [randRace, setRandRace] = useState('');

    props.randRace = race[Math.floor(Math.random() * race.length)]

    return (
        <>
            {randRace}
            {console.log(randRace)}
        </>
    )
}


function RandomGender(props) {
    const gender = gender['Male', 'Female', 'Nonbinary'];
    const [randGender, setRandGender] = useState('');

    props.randGender = gender[Math.floor(Math.random() * gender.length)];

    return (
        <>
            {randGender}
            {console.log(randGender)}
        </>
    )
}


function RandomAge(props) {
    const age = age['Child', 'Young Adult', 'Adult', 'Elder'];
    const [randAge, setRandAge] = useState('');

    props.randAge = age[Math.floor(Math.random() * age.length)];

    return (
        <>
            {randAge}
            {console.log(randAge)}
        </>
    )
}


function RandomAlignment(props) {
    const alignment = alignment['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
    const [randAlignment, setRandAlignmet] = useState('');

    props.randAlignment = alignment[Math.floor(Math.random() * alignment.length)];

    return (
        <>
            {randAlignment}
            {console.log(randAlignment)}
        </>
    )
}

const RandChar = (props) => {
    // function RandomCharacter() {
        RandomRace();
        RandomGender();
        RandomAge();
        RandomAlignment();
        return (
            <div class="text-center">
            <Button type="submit" id="submit" onClick={RandChar}>Randomize Character</Button>
            </div>
        )
    }
// }

export default RandChar;