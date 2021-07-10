import React, { useState } from 'react';
import {
    Box
} from '@material-ui/core';

import Signup from './Signup';
import Login from './Login';

const Portal = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    const togglePortal = () => { setShowLogin(!showLogin) };
    const submitLogin = () => { console.log(`Form is sent!\nusername: ${username}\npassword: ${password}`) };
    const submitSignup = () => { console.log(`Form is sent!\nusername: ${username}\npassword: ${password}\nconfirm password: ${cpassword}`) }

    return (
        <div>
            <Box bgcolor="secondary.main" width="25vw" height="50vh">
                {showLogin
                    ? <Login 
                        username={username}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        togglePortal={togglePortal}
                        submitForm={submitLogin}
                    />
                    : <Signup 
                    username={username}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setCPassword={setCPassword}
                    togglePortal={togglePortal}
                    submitForm={submitSignup}
                    />
                }
            </Box>
        </div>
    )
}

export default Portal;