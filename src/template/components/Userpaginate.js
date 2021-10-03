import React , {useState , useEffect} from 'react';
import axios from 'axios';
import header from '../../headers/headerToken';
// import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Pagination from "react-js-pagination";

export default function UserPaginate(){

 const [users , setUsers ] = useState(); 
 const [total , setTotal ] = useState(); 
 const [current_page , setCurrentPage] = useState(1);
 const [per_page , setPer_page] = useState()


 const getPaginate = (current_page = +1) => {
        axios.get(`${process.env.REACT_APP_HOME}/api/users?page=${current_page}`,{

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`
    
    }
    }
    ).then(function (response) { 
        console.log(response.data)  
        setPer_page(response.data.per_page)
        setTotal(response.data.total)    
        setUsers(response.data.data)

    }).catch(function (error) {
   
     console.log(error)
    }) 
 }
 useEffect(() => {
    getPaginate()
 },[])


 const renderusers = () => {
     return(
         <div>
         <ul className="list-group">
            {users.map(item  =>{
                return <li className="list-group-item" key={item.id}>{item.nome}</li>
            })}
         </ul>
         <div className="mt-3">
         <Pagination
          activePage={current_page}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          onChange={getPaginate}
          itemClass="page-item"
          linkClass="page-link"
        />
         </div>
         </div>
     )
 }


 return(
     <div  className="container">
        <div className="row">
        <div className="col-md-12">
         {users && renderusers()}
        </div>
        </div>
       
     </div>
 )
}

