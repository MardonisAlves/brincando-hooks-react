import React, { useState } from 'react'
import axios from 'axios';
import Alert from './alert';

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [showalert , setShowalert]= useState(false)
    const [message , setMessage] = useState([]);
    console.log(message)
    const login = () => {
        axios.post(`${process.env.REACT_APP_HOME}/oauth/token`,
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "yPNBoGS48S0KV1vlkA0R0lW5dUtXPAg5wWgNTJRz",
                "username": email,
                "password": senha,
                "scope": "*"
            }
        ).then(function (response) {
        console.log(response)
        }).catch(function (error) {
            console.log(error.response.data.message)
            setMessage([error.response.data])
            console.log(message)
            setShowalert(true)
          
        })

    }
    return (
        <div>
           
            <Alert showError={showalert} msg={message}/>
            email: <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br />
            senha : <input type="text" onChange={(e) => setSenha(e.target.value)}></input><br />
            <button onClick={login}>Login</button>

        </div>


    )
}

export default Login