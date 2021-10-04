import React , {useEffect, useState}from 'react';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import header from '../../headers/headerToken';

export default function TablePaginationDemo() {
  /*Hooks paginate*/
  const [users ,setusers] = useState([]);
  const [rowsPerPage, setRowsPerPage] =useState(5);
  const [page, setPage] = useState(0);
  const [current_page , setCurrentPage] = useState(0)
  const [total , setTotal] = useState();
  const [loading, setLoading] =useState(false);

  const [cpf  , setCpf] = useState()

  // get os users com paginação
  const newPage = current_page + 1
  const getBeneficiarios = () => {
    if(users.length === 0){
      console.log(users)
      setCurrentPage(0)

    }else{
      const newPage = current_page + 1
     
    }

    axios.get(`${process.env.REACT_APP_HOME}/api/users?page=${newPage}`,
    header()
    ).then(function (response) {

      setusers(response.data.data)    
      setRowsPerPage(response.data.per_page)
      setCurrentPage(response.data.current_page)
      setTotal(response.data.total);
      console.log(response.data.current_page) 
      
     

        console.log(response.data) 

    }).catch(function (error) {
      console.log(error)
    })
  }
  
  /*pega nova pagina*/
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    

const pesquisar = () => {
  axios.post(`${process.env.REACT_APP_HOME}/api/pesquisar/cadastro`,cpf,{
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`

}
  }).then(function (response) {
      console.log(response.data) 
      setusers([])
      setusers([response.data])
    }).catch(function (error) {
      
      console.log(error)
    })
}

useEffect(() => {
    getBeneficiarios();
},[]);

  

  return (
    
   <div className="container">
    <Stack spacing={2} direction="row">
       <TextField id="outlined-basic"
        label="Pesquisa" variant="outlined" outlined 
        onChange={(e) => setCpf(e.target.value)} />

      <Button variant="contained" onClick={pesquisar}>pesquisar</Button>
     
    </Stack>
       <ul className="list-group">

            {users.map(item  =>{
                return <li className="list-group-item" key={item.id}>{item.nome}</li>
            })}
         </ul>

       <TablePagination
         component="div"
         pagination
         count={total}
         page={page}
         rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
         loading={loading}
         rowsPerPageOptions={-1}
         onClick={ getBeneficiarios}
        
       />
   </div>
  );
}