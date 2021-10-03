import React, { useState } from 'react'
import axios from 'axios';
import Alert from './alert';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
import header from '../../headers/headerToken';
=======

import headers from '../../headers/headerToken';
>>>>>>> 17725b82f1a41b1e1a33b7c1c0bfb704fbceb992

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [showalert, setShowalert] = useState(false)
    const [message, setMessage] = useState([]);

  const alert = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored"
    });

}

const alertSuccess = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER
    });
  }

    const login = () =>{
        axios.post(`${process.env.REACT_APP_URL}/oauth/token`,
        {
<<<<<<< HEAD
                
                "grant_type": "password",
                "client_id": "8",
                "client_secret": "MUGIfW0KEH7Ivv9q2mep07r0Pl5le30mz4PUzU3y",
                "username": email,  
                "password": senha,
                "scope": "*"
               
               
        },header()
=======

    
                    "grant_type": "password",
                    "client_id": "2",
                    "client_secret": "ZoCrNv7jeDuT7oxslQm5jSk24zULCd6EGeTyqkqc",
                    "username": email,
                    "password": senha,
                    "scope": "*"
        },
            headers()
            
        
>>>>>>> 17725b82f1a41b1e1a33b7c1c0bfb704fbceb992
        ).then(function (response) {
            console.log(response)
            if(response.data){
                alertSuccess('Você esta logado')
                console.log(response)
                localStorage.setItem('access_token', response.data.access_token)
            }
        }).catch(function (error) {
            const errorLogin = [error.response.data.message]
            if (errorLogin) {
                // setMessage([error.response])
                // console.log(message)
                // setShowalert(true)
                console.log(errorLogin)
                alert('E-mail ou senha invalidos')
            }
        })

    }


    return (
        <div>
            <Alert showError={showalert} msg={message} />
            
            <ToastContainer position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            email: <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br />
            senha : <input type="text" onChange={(e) => setSenha(e.target.value)}></input><br />
            <button onClick={login}>Login</button>


        </div>


    )
}

export default Login