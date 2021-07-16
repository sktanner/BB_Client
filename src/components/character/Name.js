import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

//let adjective = ['Angry', 'Gifted', 'Brave', 'Feared'];

//var randomAdjective = adjective[Math.floor(Math.random() * answers.length)];

const Name = (props) => {

    const [randName, setRandName] = useState();

    const fetcher = () => {
        fetch('https://api.randomuser.me/')
            .then(res => res.json())
            .then(json => {
                setRandName(json);
                console.log(json);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* <Button size="medium" variant="container" onClick={fetcher}>Test</Button>
            {console.log(randName.results[0].name.first)} */}
        </div>
    )
}

export default Name;