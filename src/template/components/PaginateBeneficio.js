import React , {useEffect, useState}from 'react';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import header from '../../headers/headerToken';

export default function TablePaginationDemo() {
  const [users ,setusers] = useState([]);
  const [rowsPerPage, setRows] =useState([]);
  const [page, setPage] = useState(1);
  const [total , setTotal] = useState();
  const [loading, setLoading] =useState(false);
  const [cpf  , setCpf] = useState()

  
  
  // get os beneficiarios
  const getBeneficiarios = (page) => {
    const newpage = page + 1
    axios.get(`${process.env.REACT_APP_HOME}/api/users?page=${newpage}`,
    header()
    ).then(function (response) {
      setusers(response.data.data)
      setRows(response.data.per_page)
      setTotal(response.data.total);
      console.log(response.data) 
    }).catch(function (error) {
      
      console.log(error)
    })
  }
  
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      console.log(page)
      getBeneficiarios(page)
      
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

       <input type="text" onChange={(e) => setCpf(e.target.value)}/>
      <input type="button" onClick={pesquisar}/>
       <ul className="list-group">
            {users.map(item  =>{
                return <li className="list-group-item" key={item.id}>{item.nome}</li>
            })}
         </ul>

       <TablePagination
         component="div"
         pagination
         count={14}
         page={page}
         onPageChange={handleChangePage}
         rowsPerPage={rowsPerPage}
         loading={loading}
         rowsPerPageOptions={-1}
       />
   </div>
  );
}