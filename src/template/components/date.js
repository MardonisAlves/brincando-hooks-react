import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';





function Date(props) {
    const [date , setDate] = useState();

  console.log(date)
    // const dateFormat = (date) => {
    //   console.log(date)

    //   let data = new Date({date});
    //   let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    //   console.log(dataFormatada);
    // }

   // console.log(date);
   return(
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
    type="date"
    onChange={(e) => setDate(e.target.value)}
    
    />
  </Box>
   )
}

export default Date