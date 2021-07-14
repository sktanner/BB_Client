import React, { useState, useEffect } from 'react';

const CharacterCreate = (props) => {
    let  name = document.getElementById('name').value;
    let race = document.getElementById('race').value;
    let gender = document.getElementById('gender').value;
    let age = document.getElementById('age').value;
    let alignment = document.getElementById('alignment').value;
    let profession = document.getElementById('profession').value;
    let trait = document.getElementById('trait').value;
    //let owner = document.getElementById('owner').value;

    let newCharacter = {
        character: {
            name: name,
            race: race,
            gender: gender,
            age: age,
            alignment: alignment,
            profession: profession,
            trait: trait,
            //owner: owner
        }
    }

    fetch(`http://localhost:5432/create`, {
        method: 'POST',
        headers: newHeaders({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayMine()
        })
        .catch(err => {
            console.error(err)
        })
    })
}

export default CharacterCreate