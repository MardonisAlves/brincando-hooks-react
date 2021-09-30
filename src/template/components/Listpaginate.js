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
    axios.get(`${process.env.REACT_APP_HOME}/api/usuarios`,
    header()
    ).then(function (response) {
        console.log(response)
        setItens(response.data.users)
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
            return <div><span>{item.id}</span>  <span>{item.nome}</span> </div>
         })}
     </div>
 )
}

