import React from 'react';
import { useState } from 'react';

let adjective = ['Angry', 'Gifted', 'Brave', 'Feared'];

var randomAdjective = adjective[Math.floor(Math.random() * answers.length)];

const Name = (props) => {

    const [randName, setRandName] = useState();

    const fetcher = () => {
        fetch('https://api.randomuser.me/')
            .then(res => res.person.name.first.json())
            .then(json => {
                setRandName(json);
                console.log(json);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>{randName} the (randomAdjective)</div>
        </div>
    )
}

export default Name;