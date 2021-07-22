import { Button } from 'reactstrap';
import React from 'react';
import { useState } from 'react';

const Name = (props) => {

    const [name, setName] = useState('');

    const fetcher = () => {
        fetch('https://api.randomuser.me/')
            .then(res => res.json())
            .then(json => {
                props.setName(json.results[0].name.first);
                // console.log(json);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div class="text-center">
                <Button color="danger" onClick={fetcher}>Random Name</Button>
            </div>
            <br />
            {/* {console.log(randName.results[0].name.first)} */}
            {/* {props.randName} */}
        </div>
    )
}

export default Name;