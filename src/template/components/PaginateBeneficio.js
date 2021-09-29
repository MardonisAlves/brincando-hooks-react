import React , {useEffect, useState}from 'react';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import header from '../../headers/headerToken';
export default function TablePaginationDemo() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [data , setData] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // get os beneficiarios
  const getBeneficiarios = () => {
     return axios.get(`${process.env.REACT_APP_URL}/api/paginate?page=${page}`,
      header()
      ).then(function (response) {
          setData(response.data)
          console.log(data);
      }).catch(function (error) {
     
       console.log(error)
      })
  }

useEffect(() => {
    getBeneficiarios();
},[]);

    const tablesRows = (data) => {
        {data.map((item) => {
            <ul key={item.id}>
                <li>{item.id}</li>
            </ul>
        })
    }
    }

  return (
    
   <div>
       {tablesRows(data)}
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