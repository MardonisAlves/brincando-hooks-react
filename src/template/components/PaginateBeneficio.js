import React , {useEffect, useState}from 'react';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import header from '../../headers/headerToken';

export default function TablePaginationDemo() {
  const [users ,setusers] = useState([]);
  const [rowsPerPage, setRows] =useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] =useState(false);


  
  
  // get os beneficiarios
  const getBeneficiarios = (page) => {
    const newpage = page + 1
    axios.get(`${process.env.REACT_APP_HOME}/api/users?page=${newpage}`,
    header()
    ).then(function (response) {
      setusers(response.data.data)
      setRows(response.data.per_page)
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
useEffect(() => {
    getBeneficiarios();
},[]);

  

  return (
    
   <div>
       
       <ul className="list-group">
            {users.map(item  =>{
                return <li className="list-group-item" key={item.id}>{item.nome}</li>
            })}
         </ul>

       <TablePagination
         component="div"
         count={-1}
         page={page}
         onPageChange={handleChangePage}
         rowsPerPage={rowsPerPage}
         loading={loading}
         rowsPerPageOptions={-1}
       />
   </div>
  );
}