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
<<<<<<< HEAD
    toast.error(msg[0], {
=======
    toast.error(msg, {
>>>>>>> 3cfadddcb57b84c6970cb8c342ec98268025a994
        position: toast.POSITION.TOP_CENTER
    });
}

    console.log(message ,email , senha)
    const login = () => {
        axios.post(`${process.env.REACT_APP_URL}/oauth/token`,
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "ZoCrNv7jeDuT7oxslQm5jSk24zULCd6EGeTyqkqc",
                "username": email,
                "password": senha,
                "scope": "*"
            }
        ).then(function (response) {
            console.log(response)
            if(response.data){
                console.log(response.data)
                localStorage.setItem('access_token', response.data.access_token)
            }
        }).catch(function (error) {
            const errorLogin = [error.response.data.message]
            if (errorLogin) {
                //setMessage([error.response])
                // console.log(message)
                // setShowalert(true)
                console.log(errorLogin)
                alert(errorLogin)
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