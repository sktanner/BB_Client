import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

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
            <div class="text-center">
                <Button type="submit" id="submit" onClick={fetcher}>Random Name</Button>
            </div>
            {console.log(randName.results[0].name.first)}
        </div>
    )
}

export default Name;