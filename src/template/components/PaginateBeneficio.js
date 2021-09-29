import React , {useEffect, useState}from 'react';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import header from '../../headers/headerToken';
export default function TablePaginationDemo() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [totalRows , setTotalRows] = useState();
  const [list , setList] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // get os beneficiarios
  const getBeneficiarios = () => {
     return axios.get(`${process.env.REACT_APP_URL}/api/paginate?page=${page} + 1`,
      header()
      ).then(function (response) {

          console.log(response.data.data)
          setList(response.data.data)
          console.log(list);

      }).catch(function (error) {
     
       console.log(error)
      })
  }

useEffect(() => {
    getBeneficiarios();
},[]);

    return tablesRows = () => {
        {list.map((item) => {
            <ul key={item.id}>
                <li>{item.id}</li>
            </ul>
        })
    }
    }

  return (
    
   <div>
       {tablesRows()}
       {JSON.stringify(list)}
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