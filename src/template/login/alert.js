import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertError(props) {
   if(props.showError){
     return  <Stack sx={{ width: '50%' }} spacing={2}>
       <Alert severity="error">Dados Invalidos</Alert>
     </Stack>
     
   }else{
    return false
   }
}

export default AlertError