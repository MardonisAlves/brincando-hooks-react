import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertError(props) {
   if(props.showError){
     return  <Stack sx={{ width: '100%' }} spacing={2}>
       <Alert severity="error">Por favor verificar e-mail e senha</Alert>
     </Stack>
     
   }else{
    return false
   }
}

export default AlertError