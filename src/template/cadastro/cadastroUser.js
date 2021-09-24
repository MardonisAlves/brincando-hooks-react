import React , {useState}from 'react';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CadastroUser(){
    const [nome , setNome] = useState("");
    const [email, setEmail] = useState("");
    const [nomeusuario , setNomeusuario] = useState("");
    const [password, setPassword] = useState("");
    const [proficao , setProficao] = useState("");
    const [prefeituraid , setPrefeituraid] = useState("");
    
    const alert = (alert) => {
        toast.error(alert.email, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const data = {
        nome : nome,
        email :email,
        nomeusuario:nomeusuario,
        password:password,
        proficao:proficao,
        prefeituraId:prefeituraid
    }

    console.log(data)

    const cadastro = () => {
        axios.post(`${process.env.REACT_APP_HOME}/api/cadastro/user`,data,
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`
            }
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error.response)
            if (error) {
                //setMessage([error.response.data.message])
                // console.log(message)
                // setShowalert(true)
                const errors = error.response
               alert("oi") 
            }
        })
    }
    return(
        <Box>
        <div>
            <h1>Novo user</h1>
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          onChange={(e) => setProficao(e.target.value)}
          
        />
        <TextField
          id="outlined-number"
          label="Number"
          onChange={(e) => setPrefeituraid(e.target.value)}
          type="number"
          
        />
       <Button onClick={cadastro}>Cadastrar</Button>

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
      </div>
    </Box>

    )
}