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
    
  const alert = (alert) => {
    toast.error(alert, {
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
                "client_id": "4",
                "client_secret": "YiMR2AbcPZGFkGBcIcGlhkmfMp0ZDZGrJyAIqHoK",
                "username": email,
                "password": senha,
                "scope": "*"
            }
        ).then(function (response) {
            if(response.data){
                localStorage.setItem('access_token', response.data.access_token)
            }
        }).catch(function (error) {
            console.log(error.response.data.error)
            if (error) {
                setMessage([error.response.data.message])
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