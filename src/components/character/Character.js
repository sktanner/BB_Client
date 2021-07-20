import React from 'react'
import {Card} from 'reactstrap'

const CharacterDisplay = (props) => {

    const CharacterDisplayMap = () => {
        console.log(props.character);
            return props.character.map((character, index) => {
                return(
                    <ul key={index}>
                        <li>{character.name}</li>
                        <li>{character.location}</li>
                        <li>{character.race}</li>
                        <li>{character.gender}</li>
                        <li>{character.age}</li>
                        <li>{character.alignment}</li>
                        <li>{character.profession}</li>
                        <li>{character.trait}</li>
                    </ul>
                )
            })
      }

      return(
        <>
        <Card id="display">
                {CharacterDisplayMap()}
        </Card>
        </>
    )

}

export default CharacterDisplay












// import React, { useState, useEffect } from 'react';

// function character() {
//     let  name = document.getElementById('name').value;
//     let race = document.getElementById('race').value;
//     let gender = document.getElementById('gender').value;
//     let age = document.getElementById('age').value;
//     let alignment = document.getElementById('alignment').value;
//     let profession = document.getElementById('profession').value;
//     let trait = document.getElementById('trait').value;
//     //let owner = document.getElementById('owner').value;

//     let newCharacter = {
//         character: {
//             name: name,
//             race: race,
//             gender: gender,
//             age: age,
//             alignment: alignment,
//             profession: profession,
//             trait: trait,
//             //owner: owner
//         }
//     }

//     fetch(`http://localhost:5432/create`, {
//         method: 'POST',
//         headers: newHeaders({
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${accessToken}`
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             displayMine()
//         })
//         .catch(err => {
//             console.error(err)
//         })
//     })
// }

// export default Character;