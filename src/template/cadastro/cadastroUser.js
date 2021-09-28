import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CadastroUser(){
    const [nome , setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [proficao , setProficao] = useState();
    const [prefeituraid , setPrefeituraid] = useState();
    const [cress , setCress] = useState();
    
    const alertError = (errors) => {
   
        for (const key in errors) {
          if (Object.hasOwnProperty.call(errors, key)) {
            const element = errors[key];
            console.log(element)
            toast.error(element, {
              position: toast.POSITION.TOP_RIGHT
          });
          }
        }
      }
    const alertSuccess = () => {
      toast.warn("você está logado", {
        position: toast.POSITION.TOP_RIGHT

    });
  }


  const cadastro = () => {
    const data = {
      "nome": nome,
      "email": email,
      "password": password,
      "profissao": profissao,
      "prefeituraId": prefeituraid,
      "cress": cress
    }

    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

        axios.post(`${process.env.REACT_APP_URL}/api/cadastro/user`,data,
        {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`
        }
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
         
          const newArray = [error.response.data.errors]
          if (error.response.data.errors) {
            console.log(error.response.data)
              //console.log(errorsMessage)
              newArray.map((item) => {
                for (const key in item) {
                  if (Object.hasOwnProperty.call(item, key)) {
                    const element = item[key];
                   // console.log(element)
                   alertError(element)
                  }
                }
              })



    
          }
        })
      }
    })
  }


  return (
    <Box>
      <div>
        <h1>Novo user</h1>
        <TextField
          id="outlined-required"
          label="Nome"
          defaultValue=""
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          id="outlined-disabled"
          label="email"
          defaultValue=""
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
          label="Profissao"
          defaultValue=""
          onChange={(e) => setProfissao(e.target.value)}

        />
        <TextField
          id="outlined-number"
          label="Id"
          onChange={(e) => setPrefeituraid(e.target.value)}

        />
        <TextField
          id="outlined-number"
          label="CRESS"
          onChange={(e) => setCress(e.target.value)}

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