import React , {useState , useEffect} from 'react';
import axios from 'axios';
import header from '../../headers/headerToken';


export default function Listapaginate(){

 const [itens , setItens] = useState([]); 
 const [itensPerPage , setItensPerPage] = useState(10);
 const [currentPage , setCurrentPage] = useState(0);
 
 
 const pages = Math.ceil(itens.length / itensPerPage);
 const startindex = currentPage * itensPerPage;
 const endIndex = startindex + itensPerPage;
 const currentItens = itens.slice(startindex , endIndex)

 const getPaginate = () => {
<<<<<<< HEAD
     const pageNumber = 1
   
    axios.get(`${process.env.REACT_APP_HOME}/api/users${pageNumber}`,{

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`
    
    }
    }
=======
    axios.get(`${process.env.REACT_APP_URL}/api/users`,
    header()
>>>>>>> 17725b82f1a41b1e1a33b7c1c0bfb704fbceb992
    ).then(function (response) {
        console.log(response)
        
        setItens(response.data.data)
        console.log(itens);

    }).catch(function (error) {
   
     console.log(error)
    }) 
 }
 useEffect(() => {
    getPaginate()
 },[])

 return(
     <div>
         {Array.from(Array(pages) ,(item,index) => {
           return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>  
         })}

         {currentItens.map(item => {
            return <div key={item.id}><span>{item.id}</span>  <span>{item.nome}</span> </div>
         })}
     </div>
 )
}

