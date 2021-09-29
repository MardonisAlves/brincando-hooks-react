import React, { useState } from 'react'
import axios from 'axios';
import Alert from './alert';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {


    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [showalert, setShowalert] = useState(false)
    const [message, setMessage] = useState([]);

  const alert = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_CENTER
    });
}

const alertSuccess = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER
    });
  }

    console.log(message ,email , senha)
    const login = () => {
        axios.post(`${process.env.REACT_APP_HOME}/oauth/token`,
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "SFKUo6OGztTs6XfzuuQRlmVJLJ3GEXcPWbXRKNew",
                "username": email,
                "password": senha,
                "scope": "*"
            }
        ).then(function (response) {
            if(response.data){
                alertSuccess('Você esta logado')
                console.log(response.data)
                localStorage.setItem('access_token', response.data.access_token)
            }
        }).catch(function (error) {
            console.log(error.response)
            if (error) {
                setMessage([error.response])
                // console.log(message)
                // setShowalert(true)
                
                alert("Por favor verificar e-mail e senha")
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