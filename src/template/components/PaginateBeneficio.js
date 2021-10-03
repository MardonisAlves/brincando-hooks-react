import React , {useEffect, useState}from 'react';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import header from '../../headers/headerToken';

export default function TablePaginationDemo() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRows , setTotalRows] = useState();
  const [list , setList] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    
  };

  console.log(list)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // get os beneficiarios
  const getBeneficiarios = () => {
    axios.get(`${process.env.REACT_APP_HOME}/getuser`,
      header()
      ).then(function (response) {
      // console.log(response)
         // setList([response.data])

      }).catch(function (error) {
     
       console.log(error)
      })
  }

useEffect(() => {
    getBeneficiarios();
},[]);

  

  return (
    
   <div>
       
       {list.map(item => {
            return 
            <div key={item.id}>
              <span>{item.id}</span> 
               <span>{item.nome}</span> 
               {JSON.stringfy(list)}
               </div>
         }
         )
         }

       <TablePagination
         component="div"
         count={100}
         page={page}
         onPageChange={handleChangePage}
         rowsPerPage={rowsPerPage}
         onRowsPerPageChange={handleChangeRowsPerPage}
       />
   </div>
  );
}