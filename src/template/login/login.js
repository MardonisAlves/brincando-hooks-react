import React, { useState } from 'react'
import axios from 'axios';
import AlertError from './alert';
function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    const login = () => {
        axios.post(`${process.env.REACT_APP_URL}/oauth/token`,
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "wrSG18NYjPkh86AgCqBsbut8hSYGF4w3AfMACcFO",
                "username": email,
                "password": senha,
                "scope": "*"
            }
        ).then(function (response) {
        console.log(response)
        }).catch(function (error) {
            if(error.response.data,error){
                console.log(error.response.data)

            }else{

            }
        })

    }

    const showalert = () => {

    }
    
    return (
        <div>
            <AlertError />
            email: <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br />
            senha : <input type="text" onChange={(e) => setSenha(e.target.value)}></input><br />
            <button onClick={login}>Login</button>

        </div>


    )
}

export default Login